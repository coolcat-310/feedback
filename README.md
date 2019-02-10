# Database

The recommended schema for the application is a two-table database. The first table, Users, stores information about the user, such as name, and admin priveledges. The second table, Feedbacks, stores information about the employee's performance and a section for additional comments. 

<img width="803" alt="screen shot 2019-02-09 at 7 46 03 pm" src="https://user-images.githubusercontent.com/16736074/52529559-3bbed200-2ca8-11e9-81f9-4900c5292e2c.png">

The relationship between Users and Feedbacks is a one-to-many relationship. That is, a user may have more than one feedback record. 

