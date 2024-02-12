const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})


const userModel = mongoose.model("user", userSchema);

module.exports = {userModel}