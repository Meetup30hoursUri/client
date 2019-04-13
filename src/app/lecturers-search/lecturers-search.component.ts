import { Component, OnInit } from '@angular/core';
import { LecturersService } from 'src/app/services/lecturers-s/lecturers.service';
import { Observable, BehaviorSubject } from 'rxjs'
import { FormsModule } from '@angular/forms';

export class Item{
  name:string;
  value:string;
}

export const ITEMS: Item[] = [
  {
      name:'Name',
      value:'lowercasename'
   },
   {
       name:'Area of Expertise',
       value:'themes'
    },
    {
        name:'Availability',
        value:'available'
     }
];




@Component({
  selector: 'app-lecturers-search',
  templateUrl: './lecturers-search.component.html',
  styleUrls: ['./lecturers-search.component.css']
})
export class LecturersSearchComponent implements OnInit {
  lecturers$: Observable<any[]>;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  // searchOption: string = 'lowercasename';

  radioSelected:string;
  itemsList: Item[] = ITEMS;


  constructor(private lecturersSvc: LecturersService) { 
    this.itemsList = ITEMS;
    this.radioSelected = "lowercasename";
  }

  ngOnInit() {
    this.lecturers$ = this.lecturersSvc.getLecturers(this.startAt, this.radioSelected);
  }

  search(searchText) {
    this.startAt.next(searchText.toLowerCase());
    // console.log(searchText.toLowerCase());

  }

  // radioChangeHandler(event: any) {
  //   this.searchOption = event.target.value;
  //   console.log(this.searchOption);
  // }
  // this.searchOption.next('lowercasename');
  // console.log(this.searchOption + "nG2")
  // create another function for getting radio button choise!!!!! 



  radioChangeHandler(item){
    if(this.radioSelected === 'available') {
      this.lecturers$ = this.lecturersSvc.getAvailableLecturers();
      //hide optional
    }
    else {
      this.lecturers$ = this.lecturersSvc.getLecturers(this.startAt, this.radioSelected);
    }
  }
}
