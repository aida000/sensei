import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  seeFormation: number = 0;
  bool: boolean = false;
  openModal() {
    this.bool = true;
  }

  close(ev: any) {
    this.bool = ev;
  }
  see(id: any) {
    this.seeFormation = id;
  }
}
