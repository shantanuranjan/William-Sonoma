var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/weather', function(req, res) {
    var apiKey = '529f851338c27706f843e2cca4ff3d30';
    var city = req.query.city || 'new york';
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            res.send(body);
        }
    });


});

app.listen(3000, function() {
    console.log('Server Started!!!!!');
});



