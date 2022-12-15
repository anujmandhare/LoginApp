const express = require('express');
const app = express();
const users = require('./routes/users');
const cors = require('cors');

const PORT = 8080;

app.use(cors());
app.use('/api/users', users)
app.get('/api',(req,res) => res.send('Hello from server'));

app.listen(PORT);
console.log('http://localhost:8080/');
