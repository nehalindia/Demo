const UserModel= require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList = async function(req,res){
    let savedData = await UserModel.find().select( {bookName: 1, authorName: 1, _id:0})
    res.send({msg: savedData})
}

const getBooksInYear = async function( req, res){
    let yearV = req.body.year
    let savedData = await UserModel.find({year: yearV})
    res.send( {msg: savedData})
}

const getParticularBooks = async function( req, res){
    let obj = req.body
    let key = Object.keys(obj)
    let value = Object.values(obj)
    let savedData = await UserModel.find({[key] : value})
    res.send({Msg : savedData})
}

const getXINRBooks = async function(req, res){
    let savedData = await UserModel.find( { $or :[{ "price.indianPrice" : "100INR"},{ "price.indianPrice" : "200INR"},{ "price.indianPrice" : "500INR"} ]})
    res.send({msg : savedData})
}

const getRandomBooks = async function(req , res){
    let savedData = await UserModel.find( {$or :[{totalPages : {$gt : 500}},{ stockAvailble : true}]}).count()
    res.send( {msg : savedData} )
}


module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks