const express = require('express');
let counter = 0;

const app = express();
app.get('/', (req, res) => {
    res.send({counter:counter});
});

app.get('/increment', (req, res) => {
    counter++;
    res.send({counter:counter});
});


app.get('/decrement', (req, res) => {
    counter--;
    res.send({counter:counter});
});

app.listen(3000);