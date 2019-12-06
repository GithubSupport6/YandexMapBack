'use strict';
var express = require('express');
var router = express.Router();
var mapDb = require('../entities/mapDb');


router.get('/get-marks', function (req, res) {
    mapDb.selectAll((err, rows) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!rows) return res.status(404).send('No marks found.');

        res.send(rows);
    });
});

router.post('/add', function (req, res) {
    var mark = req.body;
    mapDb.insert(mark, err => {
        if (err) return res.status(500).send('Error while saving mark on the server.');
    });
});

router.post('/delete', function (req, res) {
    var name = req.body;
    mapDb.delete(mark, err => {
        if (err) return res.status(500).send('Error while delete mark from the server.');
    });
});

module.exports = router;
