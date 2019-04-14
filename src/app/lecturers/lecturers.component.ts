import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {

  @Input() ELEMENT_DATA: LecturerDetails[];

  displayedColumns: string[] = ['select', 'name', 'AreaOfExperties', 'Available'];
  dataSource: MatTableDataSource<LecturerDetails>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<LecturerDetails>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}

export interface LecturerDetails {
  name: string;
  id: string;
  areaOfExperties: string;
  isAvailable: boolean;
}

/*const ELEMENT_DATA: LecturerDetails[] = [
  {id: '1', name: 'Tamar Twena', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '2', name: 'Uri Shaked', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '3', name: 'Gil Fink', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '4', name: 'Shai Reznick', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '5', name: 'Netta Bondy', areaOfExperties: 'JavaScript', isAvailable: true}
];*/

