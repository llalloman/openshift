var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/marte', function (req, res) {
  res.send('Hello marte!\n');
});

app.get('/marte', function (req, res) {
  res.send('Hello Llallo!\n');
});

app.get('/marte', function (req, res) {
  res.send('Hello Llalloman!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

