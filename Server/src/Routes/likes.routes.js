const { likesController } = require("../Controllers/likes.controller");

const {Router} = require("express");

const likesRouter = Router();


likesRouter.get("/", likesController.getLikes);
likesRouter.get("/:id", likesController.getSingleLikes);
likesRouter.post("/createlikes", likesController.createLikes);
likesRouter.delete("/:id", likesController.deleteLikes);
likesRouter.patch("/:id", likesController.updateLikes);



module.exports = {likesRouter}