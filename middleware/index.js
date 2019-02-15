var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();



// BODY Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var person = [
    {
        id: 1,
        firstName: 'Jeff',
        lastName: 'Smith',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alxndrustinov/128.jpg',
        feedback: {}
    },
    {
        id: 2,
        firstName: 'Jesus',
        lastName: 'Samuel',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/victorquinn/128.jpg',
        feedback: {}
    },
    {
        id: 3,
        firstName: 'Frank',
        lastName: 'Jones',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arashmanteghi/128.jpg',
        feedback: {}
    },
    {
        id: 4,
        firstName: 'Sarah',
        lastName: 'Williams',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/deeenright/128.jpg',
        feedback: {}
    },
    {
        id: 5,
        firstName: 'Lucy',
        lastName: 'Adams',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg',
        feedback: {}
    }];

app.get('/', function (req, res) {
    res.json(person);
});


app.post('/user/add', function (req, res) {
   var newPerson = {
       id: req.body.id,
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       avatar: req.body.avatar,
       comment: req.body.comment
   };
   person.push(newPerson);
   console.log('added new Employee');
   res.send({done: true});

});

app.post('/user/question', function (req, res) {
    console.log(req.body);
    var index = person.findIndex(x => x.id == req.body.id);
    console.log(person[index]);
    var obj = req.body;
    delete obj['id'];
    person[index].feedback = obj;
    res.send(person[index]);
});

app.post('/user/del', function (req, res) {

    person.splice(person.findIndex(x => x.id == req.body.id), 1);
    console.log('delete id: ', req.body.id);
    res.send({done: true});
});





app.listen(3000, function () {
    console.log('Server started on Port 3000...');
});
