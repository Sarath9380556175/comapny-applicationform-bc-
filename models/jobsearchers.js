const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const jobseekers=new Schema({
    usn:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    
    alternateemail:{
        type:String,
        required:true
    },

    mobilenumber:{
        type:String,
        required:true
    },

    dateofbirth:
    {
        type:String,
        required:true
    },

    course:
    {
        type:String,
        required:true
    },

    YOP:{
        type:String,
        required:true
    },

    UGMarks:{
        type:String,
        required:true
    },

    diploma:{
        type:String
    },
diplomabranch:{
    type:String
    
},

diplomapercentage:
{
    type:String

},

twelvethpercentage:{
    type:String
    
},
tenthpercentage:{
    type:String,
    required:true 
},
nameofthecollege:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
universityname:{
    type:String,
    required:true
},
resume:{
    type:String,
    required:true
}



})

module.exports=mongoose.model('jobseekers',jobseekers)

