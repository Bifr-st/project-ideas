var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  var content = '<html><body><h1>Here are our awesome ideas</h1><ul>';
  var ideasDirectory = 'ideas';
  var ideaFiles = fs.readdirSync(ideasDirectory);
  ideaFiles.forEach(function(filename){
    content += '<li>' + fs.readFileSync(ideasDirectory + '/' + filename) + '</li>';
  });
  content += '</ul></body></html>';
  res.send(content);
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ', process.env.PORT, '!');
});
