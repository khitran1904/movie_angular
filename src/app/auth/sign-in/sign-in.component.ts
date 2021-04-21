import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signinForm: FormGroup = new FormGroup({
    taikhoan: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)], ),
    matkhau: new FormControl("",[Validators.required])
  })

  handleSignin(){
    // đánh dấu tất các input có trạng thái touched thành true
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid)
    return;

  }
}
