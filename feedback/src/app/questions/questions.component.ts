import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { Http, Response } from "@angular/http";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  q1: string;
  q2: string;
  q3: string;
  data: object;
  form = new FormGroup({
    q4: new FormControl('average'),
  });

  url: string;
  message: string;
  username: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.url = window.location.href;
    this.getNamefromURL();
  }

  getNamefromURL() {
    const arr = this.url.split("/");
    this.username = arr.pop();
    console.log(this.username);
    this.http.get('http://localhost:3000')
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data);
    })
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
