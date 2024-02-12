const express = require('express');
const { Connection } = require('./src/Config/db');
const {userRouter}= require('./src/Routes/user.routes');
const {postRouter}= require('./src/Routes/post.routes');
const {commentRouter}= require('./src/Routes/comment.routes');
const {likesRouter}= require('./src/Routes/likes.routes');
const {followersRoutes}= require('./src/Routes/followers.routes');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/likes", likesRouter);
app.use("/followers", followersRoutes);
app.use(cors({
    origin:"http://localhost:3000"
}))
app.listen(2345,async()=>{
    try {
        await Connection();
        console.log("connected successfully on port  2345")
    } catch (error) {
        console.log(error.message)
    }
})