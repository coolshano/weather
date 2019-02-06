const http = require("http");
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html',(err, html)  => {
    if(err){
        console.log(err);
}
    else{
        console.log('all ok');
}
    const server = http.createServer((req,res) => {
        res.statusCode = 200;
        res.setHeader('Contesnt-type', 'html');
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log('all ok' + port)
  });
  
  });