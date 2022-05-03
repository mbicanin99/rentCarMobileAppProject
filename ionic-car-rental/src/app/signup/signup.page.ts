import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUp = {
    fullName:"",
    phoneNumber:"",
    email : "",
    password: "",
  };

   type: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUpUser(){
    this.router.navigate(['login']);
  }

  changeType(){
    this.type = !this.type;
  }

  navigateToLoginPage(){
    this.router.navigate(['login']);
  }

}
