var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write('<h1>Hello World</h1>');
	res.end('<h2>Hello World</h2>');
}).listen(9001);

console.log('Server is running on a port over 9001!!!');