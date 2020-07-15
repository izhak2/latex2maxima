
var express = require('express');
var tex2max = require("tex2max");
const converter = new tex2max();

var app = express();
app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.render('index', {'converter': converter});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
