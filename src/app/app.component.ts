import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormationService } from './services/formation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  form = new FormGroup({
    url: new FormControl('', [
      Validators.required,
      Validators.pattern(this.urlReg),
    ]),
    formName: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
    ]),
    author: new FormControl('', Validators.required),
  });
  urlValid: boolean = false;
  arr: any;
  fire: number = 0;
  activeFire: boolean = false;
  constructor(private formation: FormationService) {
    // this.form = fb.group({
    //   url: ['', [Validators.required, Validators.pattern(urlReg)]],
    // });
    this.arr = formation.seeItems();
  }

  get url() {
    return this.form.get('url');
  }
  get formName() {
    return this.form.get('formName');
  }
  get author() {
    return this.form.get('author');
  }

  submit() {
    console.log(this.form.value);
  }
  checkInputs(inp1: any) {
    if (inp1.length) {
      this.urlValid = true;
    }
  }

  fireImg(e: any) {
    this.fire = e;
    this.activeFire = true;
  }
  addToList() {
    console.log(this.arr);
    this.formation.addFormationItems(this.form.value, this.fire);
    console.log(this.fire);
  }
}
