import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    confirmPassword: [
      '',
      [Validators.required, this.matchConfirmPassword.bind(this)],
    ],
  });

  matchConfirmPassword(control: AbstractControl): any {
    // const password = this.profileForm.get('password')!.value;
    // const confirmPassword = this.profileForm.get('confirmPassword')!.value;
    // if (password !== confirmPassword) {
    //   // return an error object with the key 'passwordMismatch'
    //   return { 'passwordMismatch': true };
    // } else {
    //   // return null if the passwords match
    //   return null;
    // }
  }

  constructor(
    public spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private userService: DataService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.spinner.show();
    const userForm = this.fb.group({
      firstName: [this.profileForm.get('firstName')!.value],
      lastName: [this.profileForm.get('lastName')!.value],
      email: [this.profileForm.get('email')!.value],
      phoneNumber: [this.profileForm.get('phoneNumber')!.value],
      password: [this.profileForm.get('password')!.value],
    });
    console.log(userForm);

    this.userService.addUser(userForm).subscribe(
      (response) => {
        console.log(response);
        this.profileForm.reset();
        if (response.message == 'Success') {
          this.toastr.success('User registered successfully');
        } else {
          this.toastr.warning('User already exist');
        }
      },
      (error) => console.log(error)
    );

    this.profileForm.reset();
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
