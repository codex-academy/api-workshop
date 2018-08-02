const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('home');
});

app.listen(3010, function(){
    console.log("started on: ", this.address().port);
})