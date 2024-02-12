const {commentModel} = require("../Models/comment.model");

const commentController = {
    getComment:async(req,res)=>{
        try {
            const comment = await commentModel.find();
            return  res.status(200).send(comment)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    getSingleComment:async(req,res)=>{
        try {
            const comment = await commentModel.findById(req.params.id);
            return  res.status(200).send(comment)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },


    createComment:async(req,res)=>{
        try {
            const comment = await commentModel.create(req.body);
            return  res.status(200).send({comment, message:"Comment created successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    updateComment:async(req,res)=>{
        try {
            const comment = await commentModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return  res.status(200).send({comment, message:"Comment updated successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    deleteComment:async(req,res)=>{
        try {
            const comment = await commentModel.findByIdAndDelete(req.params.id);
            return  res.status(200).send({comment,message:"Comment deleted successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },
}


module.exports = {commentController}