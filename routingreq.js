/*const http = require('http');


const routes=require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(8000);


-----------*/

//express

// const http = require('http');

const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('in the middelware');
    next();   //allow the request to continue to the next middelware in line
});

app.use((req,res,next)=>{
    console.log('in another middelware');
    res.send('<h1>hello from express js</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);

