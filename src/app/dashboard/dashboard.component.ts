import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public user: Login;

    ngOnInit() {
      this.user = {
        email: '',
        password: ''
      }
    }


    projects = ['API comunicator', 'ChatBot', 'Job Portal'];
    addSpace(Space: string) {
      
      if (Space !== '' && Space != undefined) {
        this.projects.push(Space);
      }
    }

}
