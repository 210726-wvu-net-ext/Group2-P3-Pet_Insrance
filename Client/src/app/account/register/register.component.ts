import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private https : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    doB: ['', Validators.required],
    location: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.required]
    })
    
  }

  register(){
    this.https.post<any>("https://localhost:44368/api/Users/Register", this.registerForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.registerForm.reset();
      this.router.navigate(['login']);
    }, error=>{
      alert("Something didn't work")
      console.log(error)
    })

  }

}
