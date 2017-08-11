var express = require('express');

var app = express();

// Set the port of application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});
