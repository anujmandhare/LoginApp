const express = require('express');
const router = express.Router();
const { getAllData, submitForm } = require('../DatabaseFiles/dbConnection');

router.get('/getAllData', async (req, res) => {
    const data = await getAllData();
    res.send(data)
});

router.post('/submitForm', async (req, res) => {
    const data = await submitForm(req.body);
    res.send(data);
});

module.exports = router;