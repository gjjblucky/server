const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const loginRoutes=require('./routes/login'); 
const messageRoutes=require('./routes/message');


app.use(bodyParser.urlencoded({extended:false}));




app.use( loginRoutes);
app.use(messageRoutes);

app.use((req,res,next)=> {
    res.send(`<form action="/" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" 
    method="post"> <input id="username" type="text" name="username" >
    <input type="text" name="message" id="message">
    <button type="submit">send</button></form>`);
    
});

app.listen(3000);
