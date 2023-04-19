const express = require('express');
const route1 = require('./common');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-you', function (req , res){
    console.log("I am printing my name "+ route1)
    route1.xyz
    res.send('my first trial!')
});

router.post('/trial', function (req , res){
    res.send("Use the post")
});

module.exports = router;