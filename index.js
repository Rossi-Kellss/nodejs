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

app.listen(3000);

