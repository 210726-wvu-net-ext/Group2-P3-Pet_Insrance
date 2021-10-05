import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PlansComponent } from './plans/plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './account.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    QuestionnaireComponent,
    PlansComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AccountRoutingModule
  ],
  providers: [AccountService]
})
export class AccountModule { }
