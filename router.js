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

router.post('/insert', (req, res) => {
    return Person.create({
        id: req.body.id,
        name:req.body.name,
        surname:req.body.surname,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    .then(users => {
        if(users) res.send(users)
        else res.status(400).send('Error ss');
    })
})

module.exports = router;