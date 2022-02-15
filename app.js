var express = require('express');
var app = express();
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + "/view/index.html");
});

app.listen(port, function(){
    console.log("Server listeming on port ", port);
})