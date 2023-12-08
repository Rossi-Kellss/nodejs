const express=require('express');
const app=express();



// using template engine
app.set('view engine','ejs');
app.use(express.static('./public'));


app.get('/',(req,res)=>{
    res.render("index",{name:"rossi"});

})
app.get('/contact',(req,res)=>{
    res.render("contact");
})

// using route paramaters 
app.get('/users/:name',(req,res)=>{
    res.send(`hello ${req.params.name}`);
})
app.listen(3000);

