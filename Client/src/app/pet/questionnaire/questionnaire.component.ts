import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';
import { User } from 'src/app/account/user';
import { SharedService } from 'src/app/shared/shared.service';
import { PetService } from '../pet.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  constructor(private acc: AccountService, private formBuilder: FormBuilder, private service: SharedService) { }

  form: FormGroup = new FormGroup(
    {
      breed: new FormControl(''),
      age: new FormControl(''),
      location: new FormControl(''),
      userId: new FormControl('')

    });


  // newNumber: number | number = this.service.user$.subscribe(user => {
  //   if (user) {
  //     return user?.id
  //   }
  //   else {
  //     return null;
  //   }
  // });


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      breed: [''],
      age: [''],
      location: [''],
      userId: ['']
    })
    this.acc.user$.subscribe(p =>

      console.log("inside q", p?.id));
    //results in null
  }

  onSubmit() {

    //console.log(this.form.value);



  }





}
