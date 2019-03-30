import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  lecturerList: AngularFireList<any>;
  lecturerArray = [];
  constructor(private firebase: AngularFireDatabase) { 
    this.lecturerList = this.firebase.list('/users');
    this.lecturerList.snapshotChanges().subscribe(
      list => {
        this.lecturerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });   
  }
}



// getLecturers(){
 
// }