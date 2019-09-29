const express = require('express');
const app = express();

app.get('/api/customers', function(req, res){
    const customers = [
        {id: 1, name: 'Orxan'},
        {id: 2, name: 'Baxram'}
    ];
    res.json(customers);
});

const port = 7000;

app.listen(port, () => console.log(`Server started on port ${port}`));