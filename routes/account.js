var express = require('express');
var passport = require('passport');
var Account = require('../models/Account');
var router = express.Router();

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.json({ message: 'An error occured while registering.', error: err });
        }

        passport.authenticate('local')(req, res, function () {
            res.json({ message: 'Your account was successfully registered! '});
        });
    });
});

module.exports = router;
