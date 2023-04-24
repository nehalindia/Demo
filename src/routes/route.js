const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

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

module.exports = router;