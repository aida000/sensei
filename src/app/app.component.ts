import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlFormation = new FormGroup({
    url: new FormControl('',[Validators.required]),
  });

  saveForm(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('devArr', form.value);
    // return form.value;
    form.reset()
  }
}
