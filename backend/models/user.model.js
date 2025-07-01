import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    }

    ,password:{
        type:String,
        required:true,
        trim:true,
        minLength:6
    }
    ,name:{
        type:String,
        required:true,
        trim:true
    }
    ,lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,

},{timestamps:true});


export const User = mongoose.model('User',userSchema);