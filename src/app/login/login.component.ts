import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(null, Validators.required),
    pass : new FormControl(null, Validators.required),
  })

  loginJson = {
    "id" : "testlogin@gmail.com",
    "pass":"password1"
  }
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  login(){
    if (!this.loginForm.invalid) {
      if(this.loginForm.value.email == this.loginJson.id && this.loginForm.value.pass == this.loginJson.pass ){
        this.router.navigate(['./dashboard']);
      }else{
         alert('Please check Email & Password')
      }
    } else{
      alert('All Fields are Required')
    }
  }
  ngOnInit(): void {
  }

}

