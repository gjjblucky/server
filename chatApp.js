
const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const loginRoutes=require('./routes/login'); 
const messageRoutes=require('./routes/message');


app.use(bodyParser.urlencoded({extended:false}));

app.use( loginRoutes);
app.use(messageRoutes);


app.listen(7000);



