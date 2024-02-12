const {postModel} = require("../Models/post.model");

const postController = {
    getPost:async(req,res)=>{
        try {
            const post = await postModel.find();
            return  res.status(200).send(post)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    getSinglePost:async(req,res)=>{
        try {
            const post = await postModel.findById(req.params.id);
            return  res.status(200).send(post)
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },


    createPost:async(req,res)=>{
        try {
            const post = await postModel.create(req.body);
            return  res.status(200).send({post, message:"Post created successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    updatePost:async(req,res)=>{
        try {
            const post = await postModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return  res.status(200).send({post, message:"Post updated successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },

    deletePost:async(req,res)=>{
        try {
            const post = await postModel.findByIdAndDelete(req.params.id);
            return  res.status(200).send({post,message:"Post deleted successfully"})
        } catch (error) {
          return res.status(500).send(error.message)
        }
    
    },
}


module.exports = {postController}