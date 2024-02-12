const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
    postId:{type:mongoose.Schema.Types.ObjectId, ref:"post"},
    
},{
    timestamps:true,
    versionKey:false
})


const likesModel = mongoose.model("likes", likesSchema);

module.exports =  {likesModel}