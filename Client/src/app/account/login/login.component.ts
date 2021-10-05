import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../account.service';
import { LoginRequest } from '../loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service :AccountService, private formBuilder: FormBuilder) { }



  form: FormGroup = new FormGroup ( 
    {
      userName: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    }); 
    



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName:[''],
      password: [''],
      email: ['']
    })
  }



  onSubmit() {
    console.log("Hello from submit");
    this.service.showUsers();
    let request: LoginRequest;
    
      request = {
        userName: this.form.value.userName,
        email: this.form.value.email,
        password: this.form.value.password
      }
    console.log(request);
    
    this.service.logIn(request);
  }
}
