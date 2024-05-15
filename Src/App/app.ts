import { NextFunction } from 'connect';
import { error } from 'console';
import express  from 'express'
import { Application ,Request,Response} from 'express-serve-static-core';
const app:Application = express()

const logger =(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname)
    next();
  
}
const userRouter=express.Router();


app.use('/',userRouter)
userRouter.use(express.json());
userRouter.get('/api/v1/users/create-user',(req:Request,res:Response)=>{
   const user=req.body;
   console.log(user);
   res.json({
    success:true,
    message:'User is created successfully'
   }) 
})
const courseRouter=express.Router();
app.use('/',courseRouter);
courseRouter.use(express.json());
courseRouter.post('/api/course',(req:Request,res:Response)=>{
 const course=req.body;
 console.log(course)
 res.json({
    success:true,
    message:"Course enroll successfully"
 })
})

app.get('/', logger,(req:Request, res:Response,next:NextFunction) => { 
   
try {
    res.send(something)
} catch (error) {
   next(error) 
}
 
})
app.use(express.json())
app.use(express.text())
app.post('/post',(req:Request,res:Response)=>{
    console.log(req.body);
    res.send('got data');
})

// global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
   if(error){
    res.status(400).json({
        success:false,
        message:"something went wrong",
    })
   }
})
export default app;