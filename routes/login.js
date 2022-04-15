const express =require('express');

const router=express.Router();

router.get( '/chat', (req,res,next)=>{
    
    res.send(`<form  action="/login/chat" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" 
    method="post"> <input id="message" type="text" name="message" >
    <input id="username" type="hidden" name="username" >
    <button type="submit">send</button></form>`)
    
});


// router.get('/c',(req,res,next)=> {
    
    
        
//       res.send(`<form action="/login/chat" onsubmit="localStorage.setItem('message',document.getElementById('message').value)" 
//     method="post"> 
//     <input type="type" name="message" id="message">
//     <button type="submit">send</button></form>`)
        
       


// // console.log(req.body.username);

// });


router.post('/chat',(req,res,next)=> {
   
        
    
    
});
// router.post('/c',(req,res,next)=> {
   
        
//     console.log(req.body);
//     res.redirect('/');
    
// });


module.exports=router;