import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {
  displayedColumns = ['title','date','location','theme'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private firebase: AngularFireDatabase) {
  }

   ngOnInit(){

      var itemsList:Array<object> = [];
      var promise = new Promise((resolve, reject) => {
      var ref = this.firebase.database.ref('organizerMeetups');
     

        ref.on("value", function(organizerSnapshot) {
          console.log(organizerSnapshot.val());
          organizerSnapshot.forEach(function(snapshot)  {
            console.log(snapshot.val());
            snapshot.forEach(item => {
             var themes = item.val().themes;
             var theme = Object["values"](themes).map(x => (x as any).name);
              var temp={ title : item.val().title, date: item.val().date, location: item.val().location, theme: theme};
            
            itemsList.push(temp);
            return false;
          });
        });  
        if(itemsList.length == 0)
          reject("error");
       else
          resolve(itemsList);
       });
      });
      
    this.dataSource = new MatTableDataSource();
    promise.then(data => this.dataSource = data)
    .catch(error => console.log(error));

    
    }


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

