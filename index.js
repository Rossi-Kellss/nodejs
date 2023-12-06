const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("hello middleware");
    next();

})
app.get('/',(req,res)=>{
    res.send("home page aayo mugi");

})
app.get('/side',(req,res)=>{
    res.send("side ho mugi");
})

// using route paramaters 
app.get('/users/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})
app.listen(3000);

