import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  login: string;
  password: string;
  submited: boolean;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submited = true;
    setTimeout(() => { console.log('Submited, Login: ' + this.login + " password: " + this.password);  this.submited = false;}, 3000);
   
  }

}
