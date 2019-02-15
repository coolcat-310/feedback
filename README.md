# Employee Feed

This application is meant to be a method for a supervisor to submit feedback to their subordinates.

# To start

Make sure your environment has node installed

```$xslt
Juans-MacBook-Pro:feedback juannavarrete$ node -v
v10.6.0
```

Also since the Front-end is developed in Angular make sure to install the CLI to run the application locally

```$xslt
npm install -g @angular/cli
```

Once you clone the repo, goto both directories (middleware & feedback) and install their dependancies

```$xslt
cd feedback
npm install
```

then...

```$xslt
cd middleware
npm install
```

## Running the application locally

### Angular Front-End

To launch the Front end go into the 'feedback' directory and enter the following command...

```$xslt
ng serve
```

Then on the browser goto http://localhost:4200/ 


### Middleware

To launch the middleware goto the 'middleware' directory and enter the following command...

```$xslt
nodemon
```

The middleware would be activated and actively listening on port 3000.


## The home page

<img width="1113" alt="screen shot 2019-02-13 at 10 21 10 pm" src="https://user-images.githubusercontent.com/16736074/52767074-2e725200-2fde-11e9-9ceb-cc44c92c8df5.png">

## The employee list

<img width="1053" alt="screen shot 2019-02-13 at 10 26 43 pm" src="https://user-images.githubusercontent.com/16736074/52767340-0df6c780-2fdf-11e9-8a91-f67f21da4a90.png">


## Add Employee
<img width="1216" alt="screen shot 2019-02-13 at 10 26 53 pm" src="https://user-images.githubusercontent.com/16736074/52767352-14853f00-2fdf-11e9-82d6-5a31ad86ae59.png">

## Questionaire

<img width="1044" alt="screen shot 2019-02-13 at 10 31 57 pm" src="https://user-images.githubusercontent.com/16736074/52767393-3252a400-2fdf-11e9-822d-7a4f0c19772b.png">


# Database

The recommended schema for the application is a two-table database. The first table, Users, stores information about the user, such as name, and admin priveledges. The second table, Feedbacks, stores information about the employee's performance and a section for additional comments. 

<img width="803" alt="screen shot 2019-02-09 at 7 46 03 pm" src="https://user-images.githubusercontent.com/16736074/52529559-3bbed200-2ca8-11e9-81f9-4900c5292e2c.png">

The relationship between Users and Feedbacks is a one-to-many relationship. That is, a user may have more than one feedback record. 

