const express = require('express');
const router = express.Router();
const {connect, closeConnection} = require('./dbConnection');

connect();
router.get('/', (req, res) => {
    return res.json([{
        "username": "Anuj Mandhare",
        "password": "absk"
    }, {
        "username": "Didler Didi",
        "password": "absk"
    }])
})

module.exports = router;