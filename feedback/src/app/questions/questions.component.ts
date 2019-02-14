import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  q1: string;
  q2: string;
  q3: string;

  form = new FormGroup({
    q4: new FormControl('average'),
  });

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

  storeQ1(q1){
    this.q1 = q1;
  }
  storeQ2(q2){
    this.q2 = q2;
  }
  storeQ3(q3){
    this.q3 = q3;
  }

  sumbitFeedback(){
    console.log('click submit');
  }

  cancelFeedback(){
    console.log('cancel Feedback');
  }


}
