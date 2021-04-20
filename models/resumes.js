const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const getresume=new Schema({


    name:{
        type:String,
        required:true
    },
resume:{
    type:String,
    required:true
}



})

module.exports=mongoose.model('resumes',getresume)

