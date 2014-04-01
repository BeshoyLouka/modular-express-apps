var express = require("express");
var path = require('path');
var app = express();

// Express configuration.
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'your secret code' }));
app.use(app.router);
app.use(express.errorHandler());

// Local Apps
//var Main = require('./controllers/Main');
var Patients = require('./controllers/Patients');


// ROUTES
//app.get('/', Main.index);
app.get('/patients', Patients.list);

// RUN SERVER
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
