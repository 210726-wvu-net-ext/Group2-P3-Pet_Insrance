import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PlansComponent } from './plans/plans.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    QuestionnaireComponent,
    PlansComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
