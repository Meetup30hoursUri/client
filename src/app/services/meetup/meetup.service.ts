import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Meetup } from '../../meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  meetupList: AngularFireList<any>;
  meetupArray = [];
  constructor(private firebase: AngularFireDatabase) { 
    this.meetupList = this.firebase.list('/meetups');
    this.meetupList.snapshotChanges().subscribe(
      list => {
        this.meetupArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });   
  }

    addMeetup(meetup: Meetup) {
      this.meetupList.push(meetup);
    }

}
