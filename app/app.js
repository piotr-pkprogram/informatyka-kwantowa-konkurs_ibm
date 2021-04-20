const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const routes = require('./index.js');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', routes);

app.set('port', 3000);
app.listen(app.get('port'));

console.log('Started');