import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [
  // {path: 'questionnarie', component: QuestionnaireComponent},
    {path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
    //{path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
