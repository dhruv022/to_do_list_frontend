import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-single-user-detail',
  templateUrl: './single-user-detail.component.html',
  styleUrls: ['./single-user-detail.component.scss']
})
export class SingleUserDetailComponent implements OnInit {

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
    this.DataService.getTodoById().subscribe(
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
    this.router.navigate(['/logIn']);
    localStorage.removeItem('token');
    localStorage.removeItem('Id');
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 1000);
  }
  
  deleteList() {
    this.spinner.show();
    
    if (this.tutorials && this.tutorials.length > 0) {
      const userId = this.tutorials[0].id; 
      this.DataService.deleteList(userId).subscribe(
        (data) => {
          // this.tutorials = data.data;
          console.log(data);
          console.log(this.tutorials);
          this.tutorials = this.tutorials.filter((tutorial: any) => tutorial.id !== userId);
        },
        
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('No tutorials data available');
    }
  
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }
  
}
