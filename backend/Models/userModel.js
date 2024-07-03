const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            
        },
        phone:{
            type:Number,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        password:{
            require:true,
            type:String
        }
    }
)

const User=mongoose.model('User',userSchema)
module.exports=User;