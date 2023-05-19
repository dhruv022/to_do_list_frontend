import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required]],
  });

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private userService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.spinner.show();
    const logForm = this.fb.group({
      email: [this.loginForm.get('email')!.value],
      password: [this.loginForm.get('password')!.value],
    });
    console.log(logForm);

    this.userService.loginUser(logForm).subscribe(
      (response) => {
        console.log(response);
        if (response.status == "200") {
          localStorage.setItem('token', response.token);
          localStorage.setItem('Id', response.id);
          // this.router.navigate(['/dashboard']);
          this.router.navigate(['/userDetail']);
          this.toastr.success('login Success');
          console.log("inside if");
          
        } 
        
        this.loginForm.reset();
      },

      (error) => {
        console.log(error)
        this.toastr.error('Invalid Credentials');
      }

    );
    
    this.loginForm.reset();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 3000);
  }
  //on submit if response having status 200 then redirect it to dashboard with router navigation.
}
