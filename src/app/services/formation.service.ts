import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor() {}
  arr: Array<any> = [];

  addFormationItems(form: any) {
    this.arr.push(form);
    console.log(this.arr);
  }

  seeItems() {
    return this.arr;
  }

}
