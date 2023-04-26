const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const addBook = async function(req,res){
    let bookData = await UserModel.create(req.body)
    res.send({msg: bookData})
}
const getBook = async function(req,res){
    let allBook = await UserModel.find()
    res.send( {msg: allBook})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.addBook = addBook
module.exports.getBook = getBook