import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  constructor(private webService: WebService) {}

  async ngOnInit() {
   var response = await this.webService.getMessages();
    console.log(response.json());
  }
}
