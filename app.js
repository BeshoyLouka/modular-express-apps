var express = require("express");
var app = express();


// Express configuration.
app.set('port', process.env.PORT || 3000);
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
var Patients = require('./lib/Patients');

// Mounting the local apps
app.use(Patients);

// RUN SERVER
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
