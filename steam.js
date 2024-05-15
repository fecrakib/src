
const express  = require('express');
const handle  = require('./handle');
const app  = express();
const port  = 3000;

app.param('id',(req,res,next,id)=>{
    const user  = {
        userId:id,
        name:"Bangladesh"
    };
    req.userDetails=user;
    next();
})

app.get('/user/:id',(req,res)=>{
    console.log(req.userDetails)
    res.send("hello world");
})

app.use(express.raw())

const admin  = express();
admin.get('/dashboard',(req,res)=>{
    res.send("welcome to admin dashboard")
})
 
admin.use(express.raw())
app.use('/admin',admin)

app.locals.title="my app is"
app.post('/',handle);
app.listen(port,()=>{
    console.log(app.locals.title)
    console.log("sever is running");
})