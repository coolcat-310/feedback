import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Http, Response} from "@angular/http";
import { Router } from "@angular/router";


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

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
    this.url = window.location.href;
    this.getNamefromURL();
  }

  getNamefromURL() {
    const arr = this.url.split("/");
    this.id = arr.pop();

    this.http.get(`http://localhost:3000/users`)
      .subscribe((res: Response) => {
        let local = res['_body'];
        this.data = JSON.parse(local);
        for (var i in this.data) {
          if (this.data[i].userID == this.id) {
            this.employee = Object.assign({}, this.data[i])
          }
        }
        console.log(this.employee);
        try {
          if (Object.entries(this.employee['feedback']).length > 0) {
            var inputElement = <HTMLInputElement>document.getElementById('q1');
            inputElement.value = this.employee['feedback'].q1;
            this.q1 = this.employee['feedback'].q1;

            inputElement = <HTMLInputElement>document.getElementById('q2');
            inputElement.value = this.employee['feedback'].q2;
            this.q2 = this.employee['feedback'].q2;

            inputElement = <HTMLInputElement>document.getElementById('q3');
            inputElement.value = this.employee['feedback'].q3;
            this.q3 = this.employee['feedback'].q3;

            this.form.setValue({
              q4: this.employee['feedback'].q4
            });

            console.log(this.form);
          }
        }catch (e) {
          console.log(e);
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
    console.log(this.form);
    console.log(feedback);
    this.http.post('http://localhost:3000/user/question', feedback)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/employee'])

      });
  };


  cancelFeedback() {
    this.router.navigate(['/employee']);
  }


}
