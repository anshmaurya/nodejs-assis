const express = require('express');

const app = express();

app.get('/random', (req, res) => {
    res.json({ random: Math.floor(Math.random() * 100) });
});
   
app.listen(3000);