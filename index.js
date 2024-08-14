const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function (req, res) {
    const url = req.url;
    
    if (url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), function(err, content) {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    } else if (url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), function(err, content) {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    } else if (url === '/contact-me') {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), function(err, content) {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    } else {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), function(err, content) {
            if (err) throw err;
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
}).listen(8080);