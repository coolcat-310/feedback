import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  log(x) {
    console.log(x);
  }
  url: string;
  message: string;
  username: string;

  constructor() {
  }

  ngOnInit() {
    this.url = window.location.href;
    this.getNamefromURL();
  }

  getNamefromURL() {
    const arr = this.url.split("/");
    this.username = arr.pop();
  }



}
