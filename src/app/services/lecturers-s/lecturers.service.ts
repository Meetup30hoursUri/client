  import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LecturersService {

  constructor(private db: AngularFireDatabase) { }

  getLecturers(start, end): AngularFireList<any> {

    // this.db.list('lecturers').valueChanges().subscribe(console.log);
    // this.db.list('lecturers').query.orderByChild('name').limitToFirst(10).startAt(start).endAt(end);
    // this.db.list('/lecturers', query.orderByChild('name').limitToFirst(10).startAt(start).endAt(end));
    console.log("getLecturers of LecturersService:");
    console.log("start: " + start.name);
    console.log("end: " + end.name)

    return this.db.list('/lecturers',
          ref =>
            ref
              .orderByChild('name')
              .limitToFirst(10)
              .equalTo('Gal')
              // .startAt('Gal').endAt('Gal' + 1)
              // .endAt('z'.toLowerCase())
              // .startAt(JSON.stringify(start))
              // .endAt(JSON.stringify(end))
          ); 
    // {
    //   query: {
    //     orderByChild: 'name',
    //     limitToFirst: 10,
    //     startAt: start,
    //     endAt: end
    //   }
    // }
    //);
  }

  // getlecturers(start: BehaviorSubject<string>): Observable<any[]> {
  //   return start.pipe(
  //     switchMap(startText => {
  //       const endText = startText + '\uf8ff';
  //       return this.db
  //         .list('/lecturers', ref =>
  //           ref
  //             .orderByChild('name')
  //             .limitToFirst(10)
  //             .startAt(startText)
  //             .endAt(endText)
  //         )
  //         .snapshotChanges()
  //         .pipe(
  //           debounceTime(200),
  //           distinctUntilChanged(),
  //           map(changes => {
  //             return changes.map(c => {
  //               return { key: c.payload.key, ...c.payload.val() };
  //             });
  //           })
  //         );
  //     })
  //   );
  // }
}
