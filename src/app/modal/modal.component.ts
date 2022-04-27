import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormationService } from '../services/formation.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
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
    this.form.value['fire'] = this.fire;
    this.form.value['img'] = './assets/img/books/defimage.png';
    this.form.value['id'] = Date.now();
    this.form.value['bool'] = false;

    this.formation.addFormationItems(this.form.value);
    this.item = false;
    this.closeModalFormation.emit(this.item);
  }

  @Input() item: any;
  @Output() closeModalFormation = new EventEmitter();
  closeModal() {
    this.item = false;
    this.closeModalFormation.emit(this.item);
  }
}
