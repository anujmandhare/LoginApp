const express = require('express');
const app = express();
const cors = require('cors');

const users = require('./routes/users');
const { connect } = require('./DatabaseFiles/dbConnection');
const { PORT } = require('./constants');

connect();

app.use(express.json())
app.use(cors());
app.get('/test', (req, res) => res.send('Hello from server'));
app.use('/data', users);

app.listen(PORT);
console.log('http://localhost:8080/');
