const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("hello middleware");
    next();

})

// using template engine
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render("index");

})
app.get('/side',(req,res)=>{
    res.send("side ho mugi");
})

// using route paramaters 
app.get('/users/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})
app.listen(3000);

