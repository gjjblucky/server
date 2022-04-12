  const http=require('http');

 const server= http.createServer((req,res)=>{
      res.write('<h1>lucky rathoure</h1>');
      res.end();
  })
  server.listen(5000);