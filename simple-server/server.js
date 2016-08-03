var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(req.query);
    res.send(req.query);
});

app.post('/', function(req, res) {
    console.log(req);
    res.send();
});

app.listen(process.env.PORT||3000, () => console.log('Server up!'));
