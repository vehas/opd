'use strict';
let express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');
let config = require('./config.json');
let app = express(),
  port = config.port;
// set up
app.use(morgan(':method :url :status :response-time ms  :res[content-length]'));
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', './views');
app.use('/dist', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./controllers'));

app.listen(port, () => {
  console.log(`Listening on port  :${port}`);
});
