// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'errpage.html'));
// });

// app.listen(1000);
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const Product=require('./models/product');
const User=require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=> {
    User.findByPk(1)
    .then(user =>{
        req.user=user;
        next();
    }).catch(err => console.log(err));
    
});


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


Product.belongsTo(User,{costraints: true,onDelete: 'CASCADE'});
User.hasMany(Product);



sequelize
// .sync({force: true})

.sync()
.then(result =>{
    // console.log(result);
 return User.findByPk(1);
})
.then(user => {
if(!user){
    return User.create({name:'lucky',email: 'lucky@gmail.com'});
}
return user;
})
.then(user => {
    // console.log(user);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});


