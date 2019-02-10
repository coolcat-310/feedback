# Database

The recommended schema for the application is a two-table database. The first table, Users, stores information about the user, such as name, and admin priveledges. The second table, Feedbacks, stores information about the employee's performance and a section for additional comments. 

![Schema](https://imgur.com/0UJ3tCO)

The relationship between Users and Feedbacks is a one-to-many relationship. That is, a user may have more than one feedback record. 

