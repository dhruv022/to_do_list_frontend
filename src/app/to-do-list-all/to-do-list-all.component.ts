import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-to-do-list-all',
  templateUrl: './to-do-list-all.component.html',
  styleUrls: ['./to-do-list-all.component.scss']
})
export class ToDoListAllComponent implements OnInit{
  constructor(
    private DataService: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit() {
    this.retrieveList();
  }
  tutorials: any;
  currentIndex = -1;
  retrieveList() {
    this.DataService.getAll().subscribe(
      (data) => {
        this.tutorials = data.data;
        console.log(data);
        console.log(this.tutorials);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.spinner.show();
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);
  }
  }

