const {Router} = require("express");
const {userController} = require("../Controllers/user.controoler")

const userRouter = Router();

userRouter.get("/", userController.getUser);
userRouter.get("/:id", userController.getSingleUser);
userRouter.post("/createuser", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

module.exports = {userRouter}