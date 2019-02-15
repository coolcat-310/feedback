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
  id: string;
  employee = { firstName: '', lastName: ''};

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.url = window.location.href;
    this.getNamefromURL();
  }

  getNamefromURL() {
    const arr = this.url.split("/");
    this.id = arr.pop();

    this.http.get('http://localhost:3000')
      .subscribe((res: Response) => {
        this.data = res.json();
        for (var i in this.data){
          if(this.data[i].id == this.id){
            this.employee = Object.assign({}, this.data[i])
          }
        }
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
