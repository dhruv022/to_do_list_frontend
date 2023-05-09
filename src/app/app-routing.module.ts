import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { MemberAuthGuard } from './member-auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SingleUserDetailComponent } from './single-user-detail/single-user-detail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListAllComponent } from './to-do-list-all/to-do-list-all.component';

const routes: Routes = [
  { path: 'logIn', component: LogInComponent,canActivate:[] },
  { path: 'signUp', component: SignUpComponent,canActivate:[] },
  { path: 'dashboard', component: DashboardUserComponent,canActivate:[MemberAuthGuard] },
  {path: 'profile', component: ProfileComponent,canActivate:[]},
  {path: 'userDetail', component: SingleUserDetailComponent,canActivate:[]},
  {path:'todolist', component:ToDoListComponent},
  {path: 'alltodolist', component:ToDoListAllComponent},
  { path: '**', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents =[LogInComponent,SignUpComponent,DashboardUserComponent];
