const express =require('express');
const router=express.Router();
router.get( '/c', (req,res,next)=>{
router.get( '/', (req,res,next)=>{
    
    res.send('<h1>hello from express js</h1>');
});
module.exports=router;