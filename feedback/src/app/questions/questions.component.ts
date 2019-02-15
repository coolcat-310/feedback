import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";


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
  employee = {firstName: '', lastName: ''};

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
        for (var i in this.data) {
          if (this.data[i].id == this.id) {
            this.employee = Object.assign({}, this.data[i])
          }
        }
      })
  }

  storeQ1(q1) {
    this.q1 = q1.viewModel;
  }

  storeQ2(q2) {
    this.q2 = q2.viewModel;
  }

  storeQ3(q3) {
    this.q3 = q3.viewModel;
  }

  sumbitFeedback() {
    const feedback = {
      id: this.id,
      q1: this.q1,
      q2: this.q2,
      q3: this.q3,
      q4: this.form.value.q4
    };
    console.log(feedback);
    this.http.post('http://localhost:3000/user/question', feedback)
      .subscribe(res => {
        console.log(res);

      });
  };


  cancelFeedback() {
    console.log('cancel Feedback');
  }


}
