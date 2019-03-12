import { Component, OnInit } from '@angular/core';
import { Kevin } from '../kevin';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public kev: Kevin;

  constructor() {
    this.kev = new Kevin();
  }

  ngOnInit() {
  }

}
