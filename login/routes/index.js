var Users = require('../models/users')

module.exports = function(app) {
    app.get('/', (req,res) => res.redirect('/login'))

    // LOGIN
    app.get('/login', (req, res) => res.render('login.html'))

    app.post('/login', (req, res) => {
        res.end()
    })

    // DAHSBOARD
    app.get('/dashboard', (req, res) => res.render('/dashboard', req.session))
}
