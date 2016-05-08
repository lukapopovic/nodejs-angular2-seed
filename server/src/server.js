var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('./client/'));
app.listen(port);
console.log('Server started and listening at port: ' + port);