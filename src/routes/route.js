const express = require('express');
const problem1 = require('../logger/logger.js');
const problem2 = require('../util/helper.js');
const problem3 = require('../validator/formater.js');
const lodash = require('lodash');
const router = express.Router();

const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
//const [firstSubArray, secondSubArray, thirdSubArray, fourthSubArray] = lodash.chunk(month , 3)
const arr = [1,3,5,7,9,11,13,15,17,19]

router.get('/test-me', function (req, res) {
    // problem1.welcome()
    
    // problem2.printDate()
    // problem2.printMonth()
    // problem2.printBatchInfo()

    // problem3.upperCase()
    // problem3.lowerCase()
    // problem3.trim()
   
    console.log(lodash.chunk(month , 3))
    console.log(lodash.tail(arr))
    console.log(lodash.union([2,3,4,5,6],[8,4,5,8], [12,1,3,14,16],[29,12,23,24],[11,10,7,16,24]))
    console.log(lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']
]))
    res.send('this should be working ')
});

module.exports = router;