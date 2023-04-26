const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


//movies problem from W5D4
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


// missing array value using get W6D1
router.get('/sol1',function(req, res){
    let arr = [1,2,3,4,5,6,7,8,9,11]
    let sum = arr.reduce((x,y) => x+y)
    let n = arr.length + 1
    let missingvalue = ((n*(n+1))/2) - sum
    console.log('missingvalue :'+missingvalue)
});

router.get('/sol2',function(req, res){
    let arr = [36,37,38,39,41,40,42,44]
    let sum = arr.reduce((x,y) => x+y)
    let n = arr.length +1
    let missingvalue = ((n*(arr[0]+arr[arr.length-1]))/2) - sum
    console.log('missingvalue :'+missingvalue)
});


// players problem using post W6D1
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       }
   ]

   router.post('/players', function(req,res){
    let flag = 0
    for(let i=0; i<players.length; i++){
        if(req.body.name == players[i].name){
            flag = 1
        }
    }
    let pla = req.body
    if(flag == 0){
        players.push(pla)
        res.send({data : players, status : true})
    }
    else{
        res.send({Response : "Data Already Exist"})
    }
   })


  // voter age problem using post W6D2
   let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
router.post('/voters',function(req,res){
    let arr = []
    for(let i=0; i<persons.length; i++){
        if(persons[i].age >= req.query.votingAge){
            persons[i].votingStatus = true
            arr.push(persons[i])
        }
    }
    res.send(arr)
}) 

module.exports = router;

//https://github.com/nehalindia/Demo/tree/assignment/array