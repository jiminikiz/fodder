var Users = require('../models/users')

module.exports = function(app) {
    // LOGIN
    app.get('/login', function(res, res){
        res.render('login.html')
    })
    app.post('/login', function(req, res) {
        
    })

    // DAHSBOARD
    app.get('/dashboard')
}
