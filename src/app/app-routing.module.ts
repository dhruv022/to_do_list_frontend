import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

const routes: Routes = [
  { path: 'logIn', component: LogInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'dashboard', component: DashboardUserComponent },
  { path: '**', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
