const {likesModel} = require("../Models/likes.model");

const likesController = {
    getLikes:async(req,res)=>{
        try {
            const likes = await likesModel.find();
            return  res.status(200).send(likes)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    getSingleLikes:async(req,res)=>{
        try {
            const likes = await likesModel.findById(req.params.id);
            return  res.status(200).send(likes)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },


    createLikes:async(req,res)=>{
        try {
            const likes = await likesModel.create(req.body);
            return  res.status(200).send({likes, message:"Likes created successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    updateLikes:async(req,res)=>{
        try {
            const likes = await likesModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return  res.status(200).send({likes, message:"Likes updated successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    deleteLikes:async(req,res)=>{
        try {
            const likes = await likesModel.findByIdAndDelete(req.params.id);
            return  res.status(200).send({likes,message:"Likes deleted successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },
}


module.exports = {likesController}