import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  profileForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(18)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(18)],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    phoneNumber: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    password: [
      '',
      [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{8,16}$')],
    ],
    roleId: ['', []],
  });

  constructor(
    private fb: FormBuilder,
    private userService: DataService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    const userForm = this.fb.group({
      firstName: [this.profileForm.get('firstName')!.value],
      lastName: [this.profileForm.get('lastName')!.value],
      email: [this.profileForm.get('email')!.value],
      phoneNumber: [this.profileForm.get('phoneNumber')!.value],
      password: [this.profileForm.get('password')!.value],
      roleId: [this.profileForm.get('roleId')!.value],
    });

    this.userService.addUser(userForm).subscribe(
      (response) => {
        console.log(response);
        this.profileForm.reset(); // reset the form after successful submission
      },
      (error) => console.log(error)
    );
    this.toastr.success('User registered successfully');
    this.profileForm.reset();
  }
}
