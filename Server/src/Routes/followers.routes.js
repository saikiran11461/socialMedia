const { followersController } = require("../Controllers/followers.controller");

const {Router} = require("express");

const followersRoutes = Router();


followersRoutes.get("/", followersController.getFollowers);
followersRoutes.get("/:id", followersController.getSingleFollowers);
followersRoutes.post("/createfollowers", followersController.createFollowers);
followersRoutes.delete("/:id", followersController.deleteFollowers);
followersRoutes.patch("/:id", followersController.updateFollowers);



module.exports = {followersRoutes}