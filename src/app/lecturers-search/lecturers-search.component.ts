import { Component, OnInit } from '@angular/core';
import { LecturersService } from 'src/app/services/lecturers-s/lecturers.service';
import { Observable, BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-lecturers-search',
  templateUrl: './lecturers-search.component.html',
  styleUrls: ['./lecturers-search.component.css']
})
export class LecturersSearchComponent implements OnInit {
  lecturers$: Observable<any[]>;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');


  constructor(private lecturersSvc: LecturersService) { }

  ngOnInit() {
    this.lecturers$ = this.lecturersSvc.getLecturers(this.startAt);
  }

  search(searchText) {
    this.startAt.next(searchText);
  }
  
}
