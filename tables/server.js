var http = require('http'),
    path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(logger('dev'))

app.get('/data', function( req, res ){
    res.send(require('./models'))
})
app.listen(1337, function(){
    console.log("Table server started")
})
