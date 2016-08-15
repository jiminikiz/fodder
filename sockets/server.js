var port = process.env.PORT || 1337,
    express = require('express'),
    app = express(),
    // SocketIO require
    io = require('socket.io'),
    nodeTweetStream = require('node-tweet-stream');

app.use(express.static(require('path').join(__dirname,'/public')));
app.use(require('morgan')('dev'));


// Twitter API require
var twitterStream = nodeTweetStream({
    consumer_key    : process.env.TWITTER_CONSUMER_KEY,
    consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
    token           : process.env.TWITTER_TOKEN,
    token_secret    : process.env.TWITTER_TOKEN_SECRET
});

// Which tweets to track
twitterStream.track('trump');

// Storing a reference to our webserver
app.server = app.listen(port);

// Let socket.io listen in on our server
var socketServer = io(app.server);

// Listen for the socket connection event
// Coming from the io() call on the front end
socketServer.on('connection', (socket) => {
    console.log('Socket server conntected! port:', port);
    // When we receive a tweet, emit that tweet as a socket message
    twitterStream.on('tweet', (tweetData) => {
        // Emitting a socket event named 'tweet' with data attached
        socket.emit('tweeter', tweetData);
        // socket.emit('NAME', data);
    });
    socket.on('number', (data) => {
        console.log(data);
        var newNum = data * -100000;
        socketServer.emit('newNumber', newNum);
    });
});
