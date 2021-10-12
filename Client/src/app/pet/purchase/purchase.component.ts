import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  

  constructor(private service: AccountService, private formBuilder: FormBuilder) { }

  form: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      cardNumber: new FormControl(''),
      expiry_month: new FormControl(''),
      expiry_year: new FormControl(''),
      password: new FormControl('')
    });
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiry_month: ['', Validators.required],
      expiry_year: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
