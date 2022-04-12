/*const http = require('http');


const routes=require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(8000);


-----------*/

//express

// const http = require('http');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

/*app.use((req,res,next)=>{
    console.log('in the middelware');
    // next();   //allow the request to continue to the next middelware in line
});*/



// app.use( '/add-product', (req,res,next)=>{
   
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >add product</button></form>');
// });

// app.use('/product',(req,res,next)=> {
// console.log(req.body);
// res.redirect('/');
// });

// app.use( '/', (req,res,next)=>{
    
// //     res.send('<h1>hello from express js</h1>');
// // });

// const server = http.createServer(app);

// server.listen(3000);


app.use( '/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=> {

    res.status(404).send('<h1>PAGE NOT FOUND</h1>');
});

app.listen(3000);

