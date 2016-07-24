var request = require('request');

request('http://graph.facebook.com', apiResponse);

function apiResponse (error, response, body) {
    var json = JSON.parse(body)
    console.dir(json);
}