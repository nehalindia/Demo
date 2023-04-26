const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] 
//     },
//     age: Number,
//     isIndian: Boolean,
//     parentsInfo: {
//         motherName: String,
//         fatherName: String,
//         siblingName: String
//     },
//     cars: [ String  ]
// }, { timestamps: true });
const bookSchema = new mongoose.Schema({
    bookName: { 
        type : String,
        required : true,
        unique : true
    },
    autharName: String,
    category: String,
    year: Number
}, { timestamps : true });

module.exports = mongoose.model('Book', bookSchema)



// String, Number
// Boolean, Object/json, array