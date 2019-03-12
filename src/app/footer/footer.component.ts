import { Component, OnInit } from '@angular/core';
import { Kevin } from '../kevin';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public kev: Kevin;
  
  constructor() {
    this.kev = new Kevin();
  }

  ngOnInit() {
  }

}
