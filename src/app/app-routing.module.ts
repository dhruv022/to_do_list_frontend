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
import { RestrictLoginGuard } from './restrict-login.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'logIn', component: LogInComponent,canActivate:[RestrictLoginGuard] },
  { path: '', component: SignUpComponent,canActivate:[RestrictLoginGuard] },
  { path: 'dashboard', component: DashboardUserComponent,canActivate:[MemberAuthGuard] },
  {path: 'profile', component: ProfileComponent,canActivate:[MemberAuthGuard]},
  {path: 'userDetail', component: SingleUserDetailComponent,canActivate:[MemberAuthGuard]},
  {path:'todolist', component:ToDoListComponent,canActivate:[MemberAuthGuard]},
  {path: 'alltodolist', component:ToDoListAllComponent,canActivate:[MemberAuthGuard]},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents =[LogInComponent,SignUpComponent,DashboardUserComponent];
