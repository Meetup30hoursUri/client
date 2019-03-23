import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer/lecturer.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'lecturer', component: LecturerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: AppComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
