const mysql=require('mysql2');

const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password: 'K@ngriya007'
});

module.exports=pool.promise();