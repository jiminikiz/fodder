var express = require('express'), // our framework!
    bodyParser = require('body-parser'), // used for POST routes to obtain the POST payload as a property on `req`
    path = require('path'), // used to resolve paths across OSes
    logger = require('morgan'), // log the routes being accessed by the frontend
    ejs = require('ejs'), // used for server-side templating
    sessions = require('client-sessions')({ // session cookie
        cookieName : "_myAppName", // cookie name (within document.cookies on the Frontend)
        secret: 'My$uP3R@W3$0M3$3CR3+', // encryption secret
        requestKey: 'session', // stores the session cookie in req.session
        duration: 86400, // one week in seconds = 60 * 60 * 24
        cookie: {
            path:'/',           // set cookie on the root of the site so that all routes possess the cookie in `req.session`
            ephemeral: false,   // when true, cookie expires when the browser closes
            httpOnly: true,     // when true, cookie is not accessible from javascript
            secure: false       // when true, cookie will only be sent over SSL;
        }
    }),
    app = express()

//
app.use(logger('dev'))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended:true }))

require('routes')(app)

app.listen(process.env.PORT||8888)
