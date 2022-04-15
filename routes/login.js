const path=require('path');
const express =require('express');

const router=express.Router();

router.get( '/login', (req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','chatlogin.html'));
    
});


router.get('/chat',(req,res,next)=> {
    
    
        
        res.sendFile(path.join(__dirname,'../','views','chatmessage.html'));
});

var data;
router.post('/login',(req,res,next)=> {
   
        data=req.body.username;
    
    
    res.redirect('/chat');
});
router.post('/chat',(req,res,next)=> {
   
        
    console.log(`${data}:${req.body.message}`);
    res.redirect('/');
    
});
router.get( '/contactus', (req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
    
});

router.post('/contactus',(req,res,next)=> {
   

    console.log(req.body);


res.redirect('/');
});


module.exports=router;