const http = require('http');
    //create seever
const server = http.createServer((req,res) =>{ 
    res.end('Hello from the sever');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000');
});