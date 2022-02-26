const express = require('express');
const app = express();
const port = 4040;

//static to called CSS
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))

// Set views 
app.set('views', './views/Customers');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', { text: "Please select table before order." })
});

app.listen(port, function(){
    console.log("Server listeming on port ", port);
})