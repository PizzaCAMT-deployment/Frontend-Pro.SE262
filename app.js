const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 4040;

// Object
const admin = [];
const order =[];

// body-parser
app.use(bodyparser.urlencoded({ extended: true }));
//static to called CSS
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));

// Set views 
app.set('views', './views/Customers');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', { text: "Please select table before order." });
});
app.get('/allmenu', function(req, res){
    res.render('allmenu');
});
app.get('/maindish', function(req, res){
    res.render('maindish');
});
app.get('/drinks', function(req, res){
    res.render('drinks');
});
app.get('/appetizer', function(req, res){
    res.render('appetizer');
});

/** Kitchen part */
app.get('/login',function(req, res){
    res.render('Login');
});

app.post('/loging', function(req, res){
    const userName = req.body.UserName;
    const password = req.body.Password;
    const data = {
        name: userName,
        pass: password,
    }
    admin.push(data);
    console.log(admin);;
    res.render('tableList');
});

app.listen(port, function(){
    console.log("Server listeming on port ", port);
});