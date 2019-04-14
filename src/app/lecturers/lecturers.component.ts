import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'AreaOfExperties', 'Available'];
  dataSource = new MatTableDataSource<LecturerDetails>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: LecturerDetails, filter: string) => {
      return data.areaOfExperties == filter;
     };
  }
}

export interface LecturerDetails {
  name: string;
  id: string;
  areaOfExperties: string;
  isAvailable: boolean;
}

const ELEMENT_DATA: LecturerDetails[] = [
  {id: '1', name: 'Tamar Twena', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '2', name: 'Uri Shaked', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '3', name: 'Gil Fink', areaOfExperties: 'Node.js', isAvailable: true},
  {id: '4', name: 'Shai Reznick', areaOfExperties: 'JavaScript', isAvailable: true},
  {id: '5', name: 'Netta Bondy', areaOfExperties: 'JavaScript', isAvailable: true}
];

