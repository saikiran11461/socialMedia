const {Router} = require("express");
const {commentController} = require("../Controllers/comment.controller")

const commentRouter = Router();

commentRouter.get("/", commentController.getComment);
commentRouter.get("/:id", commentController.getSingleComment);
commentRouter.post("/createComment", commentController.createComment);
commentRouter.delete("/:id", commentController.deleteComment);
commentRouter.patch("/:id", commentController.updateComment);

module.exports = {commentRouter}