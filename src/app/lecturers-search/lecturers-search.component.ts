import { Component, OnInit } from '@angular/core';
import { LecturersService } from 'src/app/services/lecturers-s/lecturers.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-lecturers-search',
  templateUrl: './lecturers-search.component.html',
  styleUrls: ['./lecturers-search.component.css']
})
export class LecturersSearchComponent implements OnInit {

  lecturers;
  startAt = new Subject()
  endAt = new Subject()

  constructor(private lecturersSvc: LecturersService) { }

  ngOnInit() {
    console.log("ngOnInit of LecturersSearchComponent");
    this.lecturersSvc.getLecturers(this.startAt, this.endAt)
    .valueChanges().subscribe(lecturers => this.lecturers = lecturers);
  }

  search($event) {
    console.log("search($event)");
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
  }

  
}
