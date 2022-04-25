// const path=require('path');

// const express =require('express');
// const router=express.Router();

// router.get( '/add-product', (req,res,next)=>{
   
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'));
// });

// router.post('/add-product',(req,res,next)=> {
// console.log(req.body);
// res.redirect('/');
// });

// module.exports=router;
const path = require('path');

const express = require('express');
const productsController=require('../controllers/products');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports=router;
