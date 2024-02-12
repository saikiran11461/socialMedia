const {Router} = require("express");
const {postController} = require("../Controllers/post.controller")

const postRouter = Router();

postRouter.get("/", postController.getPost);
postRouter.get("/:id", postController.getSinglePost);
postRouter.post("/createpost", postController.createPost);
postRouter.delete("/:id", postController.deletePost);
postRouter.patch("/:id", postController.updatePost);

module.exports = {postRouter}