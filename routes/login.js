const express =require('express');

// const { send } = require('express/lib/response');
const router=express.Router();

router.get( '/', (req,res,next)=>{

    res.send(`<form action="/" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" 
    method="post"> <input id="username" type="text" name="username" >
    <input type="type" name="message" id="message">
    <button type="submit">send</button></form>`)
}  
);

router.post('/',(req,res,next)=> {

console.log(`${req.body.username}:${req.body.message}`);

// console.log(req.body);
res.redirect('/');
});

module.exports=router;