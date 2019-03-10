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

import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login"; import { FacebookLoginProvider } from "angular5-social-login";
import { getAuthServiceConfigs } from "./socialloginConfig";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
<<<<<<< HEAD
    MeetupFormComponent,
=======
    LoginComponent,
>>>>>>> 4ab8900890dc26caa6ea9f8d2a55ee5ec44f2165
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule ,MatButtonToggleModule,MatCardModule,MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,MatIconModule,MatInputModule,MatChipsModule,
<<<<<<< HEAD
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
=======
    MatListModule, MatMenuModule, SocialLoginModule, HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
>>>>>>> 4ab8900890dc26caa6ea9f8d2a55ee5ec44f2165
  bootstrap: [AppComponent]
})
export class AppModule { }
