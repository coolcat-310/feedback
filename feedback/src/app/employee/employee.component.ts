import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee.model";
import { Http, Response } from "@angular/http";


import * as faker from 'faker';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  newFirstName: string;
  newLastName: string;
  newComment: string;
  emptyString: string = '';
  data: Object;

  constructor(private http: Http) {
    this.getEmployees();
  }

  ngOnInit() {

  }


  sortEmployees(){
    this.employees.sort(function (a,b) {
      var nameA = a.lastName.toLocaleLowerCase();
      var nameB = b.lastName.toLocaleLowerCase();
      if(nameA < nameB){
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
      return 0;
    })
  }

  newEmployee(){
    /***
     * The function adds a new employee based on the user's input.
     */

    const newEmployee = new Employee(this.newFirstName, this.newLastName);

    newEmployee.comments = this.newComment;
    newEmployee.avatar = faker.image.avatar();
    newEmployee.id =  this.generateID();

    var inputElement = <HTMLInputElement>document.getElementById('firstName');
    inputElement.value = this.emptyString;

    inputElement = <HTMLInputElement>document.getElementById('lastName');
    inputElement.value = this.emptyString;

    inputElement = <HTMLInputElement>document.getElementById('comment');
    inputElement.value = this.emptyString;

    this.employees.push(newEmployee);
    this.http.post('http://localhost:3000/user/add', {
      firstName: newEmployee.firstName,
      lastName: newEmployee.lastName,
      avatar: newEmployee.avatar,
      comment: newEmployee.comments
    }).subscribe(res =>{
        console.log('done with submission');
    });
    this.sortEmployees();
    console.log(this.employees);

  }

  deleteEmployee(lastname, firstname){
    console.log('click on delete Employee');
    console.log('delete', lastname + ', ' +firstname);
    const num = this.employees.findIndex(x => x.firstName == firstname && x.lastName == lastname);
    let id = this.employees[num].id;

    this.http.post('http://localhost:3000/user/del', {
      id: id
    }).subscribe(res =>{
      console.log('done with deletion');
      this.getEmployees();
    })

  }


  storeFirstName(firstName){
    this.newFirstName = firstName.viewModel;
  }

  storeLastName(lastName){
    this.newLastName = lastName.viewModel;
  }

  storeComment(comment){
    this.newComment = comment.viewModel;
  }

  getEmployees(){
    this.http.get('http://localhost:3000/')
      .subscribe((res: Response) => {
        this.data = res.json();
        let arr = [];
        for (var i in this.data){
          let newEmployee = new Employee(this.data[i].firstName, this.data[i].lastName);
          newEmployee.avatar = this.data[i].avatar;
          newEmployee.id = this.data[i].id;
          arr.push(newEmployee);
        }
        this.employees = arr;
        this.sortEmployees();
      });
  }

  generateID(){
    let num = Math.floor((Math.random()* 1000)+1);
    if(this.employees.findIndex(x => x.id == num) < 0){
      return num;
    }else{
      return this.generateID();
    }
  }

}
