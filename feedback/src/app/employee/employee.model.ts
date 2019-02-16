// An Employee object, to be use throughout the application.

export class Employee {
  firstName: string;
  lastName: string;
  comments: string;
  feedback: {};
  avatar: string;
  id = 0;
  hasFeedback:boolean = false;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.comments = 'Default Comment';
  }

}
