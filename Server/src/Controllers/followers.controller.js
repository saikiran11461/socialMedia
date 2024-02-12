const {followersModel} = require("../Models/follwers.model");

const followersController = {
    getFollowers:async(req,res)=>{
        try {
            const followers = await followersModel.find();
            return  res.status(200).send(followers)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    getSingleFollowers:async(req,res)=>{
        try {
            const followers = await followersModel.findById(req.params.id);
            return  res.status(200).send(followers)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },


    createFollowers:async(req,res)=>{
        try {
            const followers = await followersModel.create(req.body);
            return  res.status(200).send({followers, message:"Followers created successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    updateFollowers:async(req,res)=>{
        try {
            const followers = await followersModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return  res.status(200).send({followers, message:"Followers updated successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    deleteFollowers:async(req,res)=>{
        try {
            const followers = await followersModel.findByIdAndDelete(req.params.id);
            return  res.status(200).send({followers,message:"Followers deleted successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },
}


module.exports = {followersController}