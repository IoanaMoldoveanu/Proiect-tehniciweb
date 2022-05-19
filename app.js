const express = require('express');
const app = express();
const path = require('path');
app.get('/acasa', function(req,res){
    res.sendFile('ss.html', {root: path.join(__dirname)})
});
app.get('/desprenoi', function(req,res){
    res.sendFile('Desprenoi.html', {root: path.join(__dirname)})
});
app.get('/servicii', function(req,res){
    res.sendFile('Servicii.html', {root: path.join(__dirname)})
});
app.get('/preturi', function(req,res){
    res.sendFile('Preturi.html', {root: path.join(__dirname)})
});
app.get('/contact', function(req,res){
    res.sendFile('Contact.html', {root: path.join(__dirname)})
});
app.get('/coafor', function(req,res){
    res.sendFile('Coafor.html', {root: path.join(__dirname)})
});
app.get('/cosmetica', function(req,res){
    res.sendFile('Cosmetica.html', {root: path.join(__dirname)})
});
app.get('/manichiura/pediciura', function(req,res){
    res.sendFile('manipedi.html', {root: path.join(__dirname)})
});
app.get('/masaj', function(req,res){
    res.sendFile('masaj.html', {root: path.join(__dirname)})
});
app.get('/tratfaciale', function(req,res){
    res.sendFile('tratfac.html', {root: path.join(__dirname)})
});
app.get('/tratamentecorporale', function(req,res){
    res.sendFile('tratcorp.html', {root: path.join(__dirname)})
});
app.get('/make-up', function(req,res){
    res.sendFile('makeup.html', {root: path.join(__dirname)})
});
app.use('/folder', express.static(path.join(__dirname)));
app.use((req, res, next) => {
    res.status(404).sendFile("404.html",{root: path.join(__dirname)});
});
app.listen(4000);