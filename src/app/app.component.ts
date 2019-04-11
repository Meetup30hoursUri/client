import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs/Rx';

// export class Theme {
//   topic: Observable<string[]>;
// }
// export class Lecturer {
//   name: string;
//   themes: Theme;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    // lecturers: Observable<any[]>;

    constructor(db: AngularFireDatabase ) {
    //   this.lecturers = db.list('lecturers').valueChanges();
    //   console.log(this.lecturers);

    // const lecturers$ : AngularFireList<any> = db.list('lecturers');
    // const lecturer$ = db.list('lecturers');
    // lecturer$.valueChanges().subscribe(console.log)

// maybe the $ isn't neccasary, dos'nt matter now
    }

}
