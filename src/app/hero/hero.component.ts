import { Component, OnInit } from '@angular/core';
import { Kevin } from '../kevin';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  fullname = "Kevin Zaragoza";
  public kev: Kevin;
  constructor() {
    this.kev = new Kevin();
  }

  ngOnInit() {
  }

}
