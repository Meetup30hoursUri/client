import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturerComponent } from './lecturer/lecturer.component';

const routes: Routes = [
  { path: 'lecturer', component: LecturerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
