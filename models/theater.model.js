const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     city:{
        type:String,
        required:true
     },
     pinCode:{
        type:Number,
        required:true
     },
     movies:{
        type:[mongoose.SchemaType.ObjectId],
        ref:'Movie'

     }

})

module.exports = mongoose.model("Theater", theaterSchema)