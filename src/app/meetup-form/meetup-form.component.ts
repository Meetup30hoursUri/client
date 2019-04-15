import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ThemesService } from '../services/themes/themes.service';
import { Meetup } from '../meetup';
import { MeetupService } from '../services/meetup/meetup.service';


@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {
  meetupForm : FormGroup = new FormGroup({
    title: new FormControl(''),
    theme: new FormControl(''),
    location: new FormControl(''),
    meetupDate: new FormControl(new Date()),
    lecturers: new FormControl(0)
  })
  
  constructor( private fb: FormBuilder,
               private http: HttpClient,
               private themesService: ThemesService,
               private meetupService: MeetupService
    ) {
    this.meetupForm = this.fb.group({
      title:  [null,[
        Validators.required,
        Validators.minLength(5)
      ]],
      theme: [null,[
        Validators.required,
        Validators.minLength(1)
      ]],
      location: [null,[
        Validators.required,
        Validators.minLength(2)
      ]],
       meetupDate: [null,[
         Validators.required
       ]],
       lecturers: [null,
        []]

    }); 
     
   }

   public getSelectedThemes() {
    // var t = this.selectedTheme;
    // console.log(t);
    // console.log(t[0].name);
    // console.log(t[0].$key);
}

  ngOnInit() {   
    console.log(this.themesService);

  }
  onFormSubmit(form:NgForm)  
    {  
      console.log(form);  
      const meetup = new Meetup();
      this.meetupService.addMeetup(meetup);
    }  



}
