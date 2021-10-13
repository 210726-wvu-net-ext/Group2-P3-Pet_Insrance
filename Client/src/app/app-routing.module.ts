import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './pet/questionnaire/questionnaire.component';


const routes: Routes = [

  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) },
  { path: 'logged', component: QuestionnaireComponent }



];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
