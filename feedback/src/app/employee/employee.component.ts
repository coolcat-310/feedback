import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee.model";


import * as faker from 'faker';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  message: string;
  newFirstName: string;
  newLastName: string;
  newComment: string;
  emptyString: string = '';

  constructor() {
    this.employees = [
      new Employee('Jane', 'Doe'),
      new Employee('John', 'Doe'),
      new Employee('Mary', 'Smith'),
      new Employee('Sam', 'Williams'),
      new Employee('Juan', 'Nav')
    ]
  }

  ngOnInit() {
    this.addAvatar();
    this.sortEmployees();
  }

  addAvatar(){
    for (var i in this.employees){
      this.employees[i].avatar = faker.image.avatar();
      this.employees[i].firstName = faker.name.firstName();
      this.employees[i].lastName = faker.name.lastName();
      this.employees[i].id = '/question/' + this.employees[i].lastName;
    }

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
    newEmployee.id = '/question/' + this.newLastName;

    var inputElement = <HTMLInputElement>document.getElementById('firstName');
    inputElement.value = this.emptyString;

    inputElement = <HTMLInputElement>document.getElementById('lastName');
    inputElement.value = this.emptyString;

    inputElement = <HTMLInputElement>document.getElementById('comment');
    inputElement.value = this.emptyString;

    this.employees.push(newEmployee);
    this.sortEmployees();

  }

  deleteEmployee(lastname, firstname){
    console.log('click on delete Employee');
    console.log('delete', lastname + ', ' +firstname);
    this.employees.splice(this.employees.findIndex(x => x.firstName == firstname && x.lastName == lastname), 1)

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

}
