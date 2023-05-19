import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/users/';
const loginUrl = 'http://localhost:5000/users/login/';
const todoListUrl = 'http://localhost:5000/todoList/';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private todoListById ='http://localhost:5000/todolist/'
  private todoListUrl = 'http://localhost:5000/todoList/';
  private allUserUrl = 'http://localhost:5000/users/';
  constructor(private http: HttpClient) {}
  // getItem():Observable<any>{
  //   const id = localStorage.getItem('Id');
  //   return this.http.get(`${this.allListUrl}/list`, {  });
  // }
  // how i pass id through this function to the hit of below api.
  deleteUser():Observable<any>{
    const id = ('Id');
    return this.http.delete(`${this.allUserUrl}${id}`);
  }
  deleteList(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("id which i want to delete"+id);
    return this.http.delete(`${this.todoListUrl}${id}`, { headers });

  }
  

  getAll(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.todoListUrl}`, { headers });
  }

  getTodoById():Observable<any> {
    const token = localStorage.getItem('token');
    const Id = localStorage.getItem('Id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.todoListById}${Id}`, { headers });
  }

  getAllUser():Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.allUserUrl}`, { headers });

  }

  todolist(todoList: any):Observable<any>{
    console.log(todoList.value);
    return this.http.post(todoListUrl, todoList.value)
  }

  loginUser(loginForm: any): Observable<any> {
    console.log(loginForm.value);
    return this.http.post(loginUrl, loginForm.value);
  }
  addUser(profileForm: any): Observable<any> {
    console.log(profileForm.value);
    return this.http.post(baseUrl, profileForm.value);
  }
}
