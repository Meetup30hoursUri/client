import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import {
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

  getLecturers(start: BehaviorSubject<string>, searchOption: string): Observable<any[]> {
    return start.pipe(
      switchMap(startText => {
        const endText = startText + '\uf8ff';
        console.log("from getLecturers: " + searchOption);

        return this.db
          .list('/lecturers', ref =>
            ref
              .orderByChild(searchOption)
              .limitToFirst(10)
              .startAt(startText)
              .endAt(endText)
          )
          .snapshotChanges()
          .pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(changes => {
              return changes.map(c => {
                return { key: c.payload.key, ...c.payload.val() };
              });
            })
          );
      })
    );
  }

  getAvailableLecturers(): Observable<any[]> {
    return this.db
      .list('/lecturers', ref =>
        ref
          .orderByChild('available')
          .limitToFirst(10)
          .equalTo(true)
      )
      .snapshotChanges()
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(changes => {
          return changes.map(c => {
            return { key: c.payload.key, ...c.payload.val() };
          });
        })
      );
  }
}
