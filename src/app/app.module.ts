import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation';
import { ModalComponent } from './modal/modal.component';
import { AllFormationsComponent } from './all-formations/all-formations.component';
import { SeeAboutFormationComponent } from './see-about-formation/see-about-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AllFormationsComponent,
    SeeAboutFormationComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, CustomFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
