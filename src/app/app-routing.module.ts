import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer/lecturer.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';

const routes: Routes = [
  { path: 'lecturer', component: LecturerComponent },
  { path: 'meetup-form', component: MeetupFormComponent} 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
