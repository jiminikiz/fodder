var User = require('../models/user')

module.exports = {
    create: (req, res)=>{
        var newUser = new User(req.body)

        newUser.save((err, user)=>{
            if(err) {
                console.error('ERROR saving newUser:', err)
                res.status(500).send(errors.general)
            } else {
                req.session.user = user
                res.send(user)
            }
        })
    }
}
