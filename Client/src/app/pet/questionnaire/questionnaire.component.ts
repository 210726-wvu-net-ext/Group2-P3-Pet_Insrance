import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor(private service: AccountService, private formBuilder: FormBuilder) { }

  form: FormGroup = new FormGroup(
    {

      breed: new FormControl(''),
      state: new FormControl(''),
    });




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      breed: [''],
      state: [''],
    })
  }

  onSubmit() {
    



  }





}
