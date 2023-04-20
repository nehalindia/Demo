const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const myUnderscore = require('underscore')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res){
    let result = myUnderscore.first([11,12,23,44,15], 4)
    console.log('the result is',result)
    res.send('done')
})

router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})

const array = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies',function(req, res){
    console.log(array)
})
router.get('/movies/:index',function(req,res){
    if(req.params.index<array.length && req.params.index>=0){
        res.send(array[req.params.index])
    }
    else{
        res.send("out Of index")
    }
})

const arr=[ {'id': 1,'name': 'The Shining'}, 
    {'id': 2,'name': 'Incendies'}, 
    {'id': 3,'name': 'Rang de Basanti'},
    {'id': 4,'name': 'Finding Nemo'}]

router.get('/films',function(req,res){
    res.send(arr)
})
router.get('/films/:filmid',function(req, res){
    let flag =0
    for(let i=0; i<arr.length; i++){
        if(req.params.filmid==arr[i].id){
            res.send(arr[i])
            flag=1
        }
    }
    if(flag == 0){
        res.send("No movie exists with this id")
    }
})

module.exports = router;