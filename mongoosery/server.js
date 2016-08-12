var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 8080, app = express();
    Forum = require('./models/forum');

mongoose.connect('mongodb://localhost/forum', ( error ) => {
    if( error ) {
        console.error('ERROR starting mongoose!', error)
    } else {
        console.log('Mongoose connected successfully!')
    }
});

app.use(express.static(require('path').join(__dirname,'public')));
app.use(require('morgan')('dev'));

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.get('/api/forum', (req,res) => {
    Forum.find({}, (err, forums) => {
        res.status(err? 500:200)
            .send(forums? forums:err);
    })
});

app.get('/api/forum/:id', function(req,res) {
    Forum.findOne({
        _id : req.params.id
    }, (err, forum) => {
        res.status(err? 500:200)
            .send(forum? forum:err);
    });
});

app.post('/api/forum', function(req, res) {
    var forum = new Forum(req.body);

    forum.save((err,result) => {
        res.status(err? 500:200)
            .send(result? result:err);
    });
});

// 57a3bbd21dfa6218244a28fa
app.get('/api/forum/thread/:id', (req, res) => {
    Forum.findOne({
        'threadCategories.threadSections._id' : req.params.id
    }, (err, forum) => {
        res.status(err? 500:200)
            .send(forum? forum:err);
    })
});

app.post('/api/forum/thread/:id', (req, res) => {
    console.log('Here Saving Topic');
    console.log('Data: ', req.body.data, 'Params: ', req.params.id);

    Forum.findOne({
        'threadCategories.threadSections._id' : req.params.id
    }, (err1, forum) => {
        let section = forum.threadCategories[0].threadSections.id(req.params.id)
        section.threads.push(req.body.data);

        if( err1 ) {
            return res.status(500).send({ message: 'Fuck' });
        }

        if ( !forum ) {
            return res.status(404).send({ message: 'Nope' })
        }

        forum.save((err2, result) => {
            res.status( err2? 500:200 )
                .send( result? result:err2 );
        })
    })
});

app.listen(port, (error) => {
    if( error ) {
        console.error('ERROR starting server!', error);
    } else {
        console.log('Forum server started successfully on port:', port);
    }
});
