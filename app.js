const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), function(err, content) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    })
})

app.get("/about", (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), function(err, content) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    })
})

app.get("/contact-me", (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), function(err, content) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    })
})

app.get("*", (req, res) => {
    fs.readFile(path.join(__dirname, 'public', '404.html'), function(err, content) {
        if (err) throw err;
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(content);
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);