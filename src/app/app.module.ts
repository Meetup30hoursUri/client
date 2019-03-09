import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule,
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
        MatMenuModule,
        MatNativeDateModule,
        MatSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { HttpClientModule }    from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MeetupService } from './services/meetup/meetup.service';


@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    MeetupFormComponent,
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
    AngularFireModule.initializeApp(environment.firbaseConfig)

    
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
    MatSelectModule
  ],  
  providers: [MeetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
