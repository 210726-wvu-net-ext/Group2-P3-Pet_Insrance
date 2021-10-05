import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
