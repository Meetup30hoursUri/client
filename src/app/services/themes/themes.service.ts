import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  themesList: AngularFireList<any>;
  themesArray = [];
  constructor(private firebase: AngularFireDatabase) { 
    this.themesList = this.firebase.list('/themes');
    this.themesList.snapshotChanges().subscribe(
      list => {
        this.themesArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });   
  }
}
