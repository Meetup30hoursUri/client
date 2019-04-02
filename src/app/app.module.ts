import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule,
        MatTableModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatChipsModule,
        MatListModule,
        MatPaginatorModule,
        MatMenuModule,
        MatNativeDateModule,
        MatSelectModule,
        MatAutocompleteModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { HttpClientModule }    from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ThemesService } from './services/themes/themes.service';
import { getAuthServiceConfigs } from "./socialloginConfig";
import { LecturersComponent } from './lecturers/lecturers.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    MeetupFormComponent,
    LecturersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule ,MatButtonToggleModule,MatCardModule,MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,MatIconModule,MatInputModule,MatChipsModule,
    MatListModule, MatMenuModule,MatTabsModule,MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firbaseConfig),
    MatAutocompleteModule,
    MatIconModule 
  ],
  exports: [  
    MatButtonModule,  
    MatMenuModule,    
    MatIconModule,  
    MatCardModule,  
    BrowserAnimationsModule,  
    MatInputModule,  
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule, MatMenuModule, HttpClientModule,MatChipsModule
  ],  
  providers: [ThemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
