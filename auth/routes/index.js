'use strict'

var Auth = require('./auth'),
    Users = require('./users')

module.exports = function(app) {
    // SITE ROOT
    app.get('/', (req, res)=>{
        if( req.session.user ) {
            res.redirect('/dashboard')
        } else {
            res.redirect('/login')
        }
    })

    app.get('/login', Auth.render)
    app.post('/login', Auth.login)
    app.post('/register', Users.create)

    // DAHSBOARD
    app.get('/dashboard', (req, res)=>{
        res.render('/dashboard', req.session)
    })
}
