const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/example',(req,res)=>{
    res.send('This is example page');
});
app.get('/example/:name/:age',(req,res)=>{
    res.send(req.params.name + " : " + req.params.age);
    console.log(req.query);
});
app.listen('3000');