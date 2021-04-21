import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // làm sao lấy đk value của form

  @ViewChild("signupForm") signupForm !: NgForm;
  handleSignUp(){
    if(this.signupForm.invalid) return;
    alert(JSON.stringify(this.signupForm.value))
  }
}
