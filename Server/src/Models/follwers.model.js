const mongoose = require('mongoose')

const followersSchema = new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    follower_id:{type:mongoose.Schema.Types.ObjectId,ref:"followers"}
},{
    timestamps:true,
    versionKey:false
});


const followersModel = mongoose.model("follower", followersSchema);

module.exports = {followersModel}