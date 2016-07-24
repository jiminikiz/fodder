'use strict'

var errors = {
    general: {
        status: 500,
        message: 'Server error: could not login'
    },
    noUser: {
        status: 403,
        message: 'No user found'
    },
    password: {
        status: 403,
        message: 'Invalid username or password'
    }
}

module.exports = {
    login: function(req, res) {
        User.findOne({
            username: req.body.username // sent from the frontend in a POST request
        }, (err, user) => {
            // If there was an error in mongo, send back a 500 response (general server error) to the Frontend
            if (err) {
                console.error('MongoDB error:', err)
                res.status(500).send(errors.general)
            }
            // If there was no user found for the given user name, send back a 403 response (forbidden)
            if (!user) {
                res.status(403).send(errors.noUser)
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(req.body.password, user.password, function(bcryptErr, matched){
                if (bcryptErr) {
                    console.error('Error decrypting password:', bcryptErr)
                    res.status(500).send(errors.general)
                } else if (!matched) {
                    console.warn('Passwords do not match for:', user)
                    res.status(403).send(errors.password)
                } else {
                    req.session.user = user // set the user in the session!
                    res.send(user)
                }
            })
        });
    }
}
