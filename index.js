const http = require('http');
const port = 8000;


const server = http.createServer();

server.listen(port , function(err){
    if(err){
        console.log(`Error in creating server ${err}`);
    }
    console.log(`Server is running on the port::${port}`)
})

