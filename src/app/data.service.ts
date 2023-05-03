import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  addUser(profileForm: FormGroup): Observable<any> {
    console.log(profileForm.value);
    const url = 'http://localhost:5000/users/';
    return this.http.post<any>(url, profileForm.value);
  }
}
