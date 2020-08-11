import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: Login;
  constructor(public router: Router) {}

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }
  save(f: Login, isValid: boolean) {
    console.log(isValid);
    if(isValid == true) {
      if(f.email == 'John_Smith@' && f.password == 'Bugtrack@123')
          this.router.navigate(['/dashboard']);
         // console.log("hi");
      } else {
          //console.log("fail");
      }
  }
}
