import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { QuestionnaireComponent } from '../pet/questionnaire/questionnaire.component';
import { PlansComponent } from '../pet/plans/plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    AccountRoutingModule
  ],
  providers: [AccountService]
})
export class AccountModule { }
