import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor() {}
  arr: Array<any> = [];

  addFormationItems(form: any,fire:any) {
    this.arr.push(form,fire);
    console.log(this.arr);
  }

  seeItems() {
    return this.arr;
  }
}
