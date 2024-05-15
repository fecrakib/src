
const handle  = (req,res)=>{
    console.log(req.app.locals.title)
};

module.exports=handle;