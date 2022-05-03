import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  resetPassword = {
    email : "",
    newPassword: "",
  };

  type: boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToLoginPage(){
    this.router.navigate(['login']);
  }

  changeType(){
    this.type = !this.type;
  }

}
