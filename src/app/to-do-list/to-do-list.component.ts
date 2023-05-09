import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  todolist = this.fb.group({
    title: [
      '',
      [
        Validators.required
      ],
    ],
    description:[
      ''
    ],
    status: [
      '',
      [
        Validators.required
      ],
    ]
  });

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private userService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  onSubmit() {

    this.spinner.show();
    const todolist = this.fb.group({
      userId: [localStorage['Id']],
      title: [this.todolist.get('title')!.value],
      description: [this.todolist.get('description')!.value],
      status: [this.todolist.get('status')!.value],
    });
    console.log(todolist);

    this.userService.todolist(todolist).subscribe(
      (response) => {
        console.log(response);
        // if (response.status == 200) {
        //   localStorage.setItem('token', response.token);
        //   localStorage.setItem('Id', response.id);
        //   // this.router.navigate(['/dashboard']);
        //   this.router.navigate(['/userDetail']);
        // }
        // else {
        //   console.log("invalid credentials");
        //   this.toastr.success('Invalid Credentials');
        // }
        // this.todolist.reset();
      }

      // (error) => console.log(error)
    );
    this.todolist.reset();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }
  //on submit if response having status 200 then redirect it to dashboard with router navigation.
}

