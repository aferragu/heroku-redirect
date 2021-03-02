var express = require('express');
var app = express();

var newBaseURL = 'https://covid-monitor.agesic.gub.uy';
var redirectStatus =  302;
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
