import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email : "",
    password: "",
  };

  type: boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToHomePage(){
      this.router.navigate(['home'])
  }

  changeType(){
    this.type = !this.type;
  }

  goToForgotPassword(){
    this.router.navigate(['forgotpassword']);
  }

  gmailLogin(){

  }

  twitterLogin(){

  }

  facebookLogin(){
    
  }

}
