import express from 'express';
import { getCode } from './GetToken.js';
import { getCookies } from './GetCookies.js'
import { clockOut } from './ClockOut.js'
import { clockIn } from './ClockIn.js'
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});



app.get('/', function(req, res) {
  res.send('hello world');
});


app.get('clockIn', function(req, res) {
  res.send('clock In today');
  var  result  =  getCode().then(code => getCookies(code)).then(res =>clockIn(res));
});


app.get('clockOut', function(req, res) {
  res.send('clock Out today');
  var  result  =  getCode().then(code => getCookies(code)).then(res =>clockOut(res));
});



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})