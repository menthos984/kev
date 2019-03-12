import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  education: {title: string, school: string, year: string}[];
  experience: {title: string, year: string, description: string}[];
  constructor() {
    this.education = [{
      title: "Bachelor of Science in Information and Technology",
      school: "Ateneo de Zamboanga University",
      year: "2011 - 2017"
    },{
      title: "Secondary School",
      school: "Zamboanga City High School - Main",
      year: "2007 - 2011"
    },{
      title: "Grade School",
      school: "Putik Central School",
      year: "2001 - 2007"
    }];

    this.experience = [{
      title: "Kahon.ph",
      year: "2017 ~ Present",
      description: "An ecommerce website that provides full-serviced storage. This ecommerce website is built using NodeJS and MongoDB"
    },{
      title: "Electroweld Management System",
      year: "2017",
      description: "A Management System that digitize their business process. This system was build on NodeJS and MongoDB"
    },{
      title: "Running Math Challenge",
      year: "2016 ~ 2017",
      description: "A game-based supplemental learning tool for basic arithmetic operations. The game is built with Phaser.io and HTML5"
    }];
  }

  ngOnInit() {
  }

}
