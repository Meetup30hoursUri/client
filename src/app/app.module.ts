import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,
  MatButtonToggleModule,MatCardModule,MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule,MatIconModule,MatInputModule,MatChipsModule,
  MatListModule, MatMenuModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule ,MatButtonToggleModule,MatCardModule,MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,MatIconModule,MatInputModule,MatChipsModule,
    MatListModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
