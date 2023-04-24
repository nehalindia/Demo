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

module.exports = router;