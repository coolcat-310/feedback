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
    //console.log(this.employees);
  }

  addAvatar(){
    for (var i in this.employees){
      this.employees[i].avatar = faker.image.avatar();
      this.employees[i].firstName = faker.name.firstName();
      this.employees[i].lastName = faker.name.lastName();
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

}
