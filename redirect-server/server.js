var HTTP = require('http')
var HTTPS = require('https')

var express = require('express')
var fs = require('fs')

var app = exrpess()
var appHTTP = express()
var sslOptions = {
    key: fs.readFileSync('/etc/ssl/certs/mycert.key.crt'),
    cert: fs.readFileSync('/etc/ssl/certs/mycert.crt')
}

appHTTP.use(function ( req, res, next ) {
    res.set('X-Forwarded-Proto','https');
    res.redirect('https://'+ req.headers.host + req.url);
    next();
})

HTTP.createServer( app ).listen( process.env.PORT || 80 );
HTTPS.createServer( sslOptions, app ).listen( process.env.PORT_SSL || 443 );
