import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { LogInRequest } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service :SharedService, private formBuilder: FormBuilder, public modal: NgbActiveModal) { }



  form: FormGroup = new FormGroup ( 
    {
      fullName: new FormControl(''),
      pass: new FormControl(''),
      email: new FormControl('')
    }); 
    



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName:[''],
      pass: [''],
      email: ['']
    })
  }

  onSubmit() {
    let request: LogInRequest;
    if(this.form.value.email)
    {
      request = {
        userName: this.form.value.userName,
        email: '',
        pass: this.form.value.pass
      }
    }
    else {
      request = {
        userName:"",
        email:this.form.value.email,
        pass: this.form.value.pass
      }
    }
    this.service.logInUser(request);
    this.modal.close(200);

  }
}
