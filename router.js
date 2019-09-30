const express = require('express');
const router = express.Router();
const db = require('./db');
const Person = require('./person');

router.get('/', (req, res) => {
    Person.findAll()
    .then(person => {
        console.log(person);
        res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

router.post('/test', function (request, response) {
    return users.create({
        id: request.body.id,
        name: request.body.name
    }).then(function (users) {
        if (users) {
            response.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    });
});

module.exports = router;