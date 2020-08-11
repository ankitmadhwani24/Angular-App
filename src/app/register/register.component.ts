import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: Login;

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }
}
