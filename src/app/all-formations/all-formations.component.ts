import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-all-formations',
  templateUrl: './all-formations.component.html',
  styleUrls: ['./all-formations.component.css'],
})
export class AllFormationsComponent implements OnInit {
  constructor(private formation: FormationService) {}
  bool: boolean = false;
  arr: any;
  ngOnInit(): void {
    this.arr = this.formation.seeItems();
  }
  @Output() seeAbout = new EventEmitter();
  seeMore(id: any) {
    this.seeAbout.emit(id);
  }
}
