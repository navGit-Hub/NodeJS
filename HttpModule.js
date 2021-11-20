const http=require('http');
let server=http.createServer((request,response)=>{
if(request.url==='/')
  response.end("Welcome to Home Page");

else if(request.url==='/about')
    response.end("The web page was created by nav");

else
  response.end(`<h1>OOps the requested page not found</h1>
   <a href='/'>get back</a>`);
});
server.listen(4000);