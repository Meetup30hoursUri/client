import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer/lecturer.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { LecturersComponent } from './lecturers/lecturers.component';

const routes: Routes = [
  { path: 'lecturer', component: LecturerComponent },
  { path: 'meetup-form', component: MeetupFormComponent},
  { path: 'lecturers', component: LecturersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
