const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    imgUrl:{type:String,required:true},
    likes:{type:Number,default:0},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    
},{
    timestamps:true,
    versionKey:false
})


const postModel = mongoose.model("post", postSchema);

module.exports = {postModel}