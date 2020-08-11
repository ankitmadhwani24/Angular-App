import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {

  public user: Login;

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }

}
