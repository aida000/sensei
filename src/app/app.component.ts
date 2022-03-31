import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  form = new FormGroup({
    url: new FormControl('', [Validators.required, Validators.pattern(this.urlReg)]),
    formName:new FormControl('', [Validators.required, Validators.maxLength(25)]),
    author:new FormControl('',Validators.required)
   
  });
  urlValid:boolean=false

  constructor() {
    // this.form = fb.group({
    //   url: ['', [Validators.required, Validators.pattern(urlReg)]],
    // });
  }

  get url() { 
    return this.form.get('url');

   }
   get formName(){
    return this.form.get('formName');
   }
   get author(){
    return this.form.get('author');

   }

  submit() {
    console.log(this.form.value);
  }


}
