const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment:{type:String, required:false},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"post"}
},{
    timestamps:true,
    versionKey:false
})

const commentModel =  mongoose.model("comment", commentSchema);

module.exports = {commentModel};