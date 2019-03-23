import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,
  MatButtonToggleModule,MatCardModule,MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatChipsModule,
  MatListModule, MatMenuModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { WebService } from './services/web.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule ,MatButtonToggleModule,MatCardModule,MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,MatIconModule,MatInputModule,MatChipsModule,
    MatListModule, MatMenuModule, HttpModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
