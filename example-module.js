'use strict'

const Twitter = new require('twitter-node-client').Twitter({
    "consumerKey": '',
    "consumerSecret": '',
    "accessToeken": '',
    "accessTokenSecret": '',
    "callbackUrl": ''
})

var twitterDataGetter = {
    getTwitterData: function(urlPrefix, apiCall, callback) {
        Twitter.getCustomApiCall(
            urlPrefix,
            apiCall,
            twitterDataGetter.error(callback),
            twitterDataGetter.success(callback)
        )
    },
    error: function(callback) {
        return function( e, res, body ) {
            console.error(e, res, body);
            callback({ error: e }, null);
        }
    },
    success: function(callback) {
        return function( data ) {
            callback(null, data)
        }
    }
}
