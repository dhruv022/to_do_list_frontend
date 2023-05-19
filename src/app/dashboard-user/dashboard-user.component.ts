import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent implements OnInit {
  tutorials: any;
  currentIndex = -1;
  ngOnInit() {
    this.retrieveList();
  }
  constructor(
    private DataService: DataService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  retrieveList() {
    this.DataService.getAllUser().subscribe(
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
    localStorage.removeItem('Id');
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);
  }
  deleteUser(){
     this.spinner.show();
     this.DataService.deleteUser().subscribe(
      (data) => {
        this.tutorials = data.data;
        console.log(data);
        console.log(this.tutorials);
      },
      (error) => {
        console.log(error);
      }
    );
     setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);
  }
}

