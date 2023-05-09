import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleUserDetailComponent } from './single-user-detail/single-user-detail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListAllComponent } from './to-do-list-all/to-do-list-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    DashboardUserComponent,
    ProfileComponent,
    SingleUserDetailComponent,
    ToDoListComponent,
    ToDoListAllComponent,
  ],

  imports: [
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
