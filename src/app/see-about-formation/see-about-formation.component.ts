import { Component, Input, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-see-about-formation',
  templateUrl: './see-about-formation.component.html',
  styleUrls: ['./see-about-formation.component.css'],
})
export class SeeAboutFormationComponent implements OnInit {
  constructor(private formation: FormationService) {}
  arr: any;
  @Input() aboutItem: any;
  ngOnInit(): void {
    this.arr = this.formation.seeItems();
  }
}
