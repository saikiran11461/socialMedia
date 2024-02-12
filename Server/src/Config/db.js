const mongoose = require('mongoose')

const Connection = ()=>{
    return mongoose.connect("mongodb+srv://saikirancoursestwo:x4qlMhuAZRKpNsZp@cluster0.bl60zid.mongodb.net/")
}

module.exports =  {Connection}