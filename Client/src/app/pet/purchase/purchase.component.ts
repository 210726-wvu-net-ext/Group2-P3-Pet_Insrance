import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private acc: AccountService, private service: SharedService) { }
  pets: Pet[] = [];




  ngOnInit(): void {
    this.acc.user$.subscribe(p => {
      console.log(p);
      if (p) {
        this.service.getPets(p).subscribe(x => {
          this.pets = x;
          console.log("heyo", this.pets)
        })
      }
    });
  }




  onSubmit() {
    console.log("sup submit", this.pets);
    this.service.payForInsurance(this.pets);




  }

}
