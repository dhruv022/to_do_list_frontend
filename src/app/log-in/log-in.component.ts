import { Component } from '@angular/core';
import {  FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['',[Validators.required]],
  });
  constructor( private fb: FormBuilder) {

  }
  onSubmit() {
    this.loginForm.reset();
    
  }
}
