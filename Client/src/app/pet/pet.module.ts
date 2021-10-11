import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet/pet.component';
import { QuoteComponent } from './quote/quote.component';
import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [
    PetComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PetModule { }
