import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MeetupService } from '../services/meetup/meetup.service';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {
  // meetupForm = FormGroup;
  // title: string = '';
  // theme: string = '';
  // location: string = '';
  // meetupDate: new DateTime(): TateTime;


  meetupForm : FormGroup = new FormGroup({
    title: new FormControl(''),
    theme: new FormControl(''),
    location: new FormControl(''),
    meetupDate: new FormControl(new Date()),
    lecturers: new FormControl(0)
  })
 
  constructor( private fb: FormBuilder,
               private http: HttpClient,
               private meetupService: MeetupService
    ) {
    this.meetupForm = this.fb.group({
      title:  [null,[
        Validators.required,
        Validators.minLength(2)
      ]],
      theme: [null,[
        Validators.required,
        Validators.minLength(2)
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

  ngOnInit() {   
    console.log(this.meetupService);
    // this.meetupFirebaseService.getUsers()
    //   .subscribe(result => {
    //     this.items = result;
    //   })
  }
  onFormSubmit(form:NgForm)  
    {  
      console.log(form);  
    }  

}
