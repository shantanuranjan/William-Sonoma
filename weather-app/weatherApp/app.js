'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/weather', (req, response) => {
	var apiKey = '529f851338c27706f843e2cca4ff3d30';
    var city = req.query.city||'new york';
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
	    request(url, function (err, res, body) {
        if(err){
            console.log('error:', err);
        } else {
            console.log('body:', body);
            response.send(body);
        }
    });
  
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
