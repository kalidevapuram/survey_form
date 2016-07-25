// require express
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

 
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.post('/result', function(req, res) {
var user = {};
user.name = req.body.name;
user.location = req.body.location;
user.language = req.body.language;
user.comment = req.body.comment;
user.title = 'Survey Form';
console.log(user);
res.render("result", user);
})

app.get('/result', function(req, res){
	res.render('result', {title: 'Survery Form'});
})


app.listen(8000, function() {
 console.log("listening on port 8000");
})


