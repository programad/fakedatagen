'use strict';

const
    app = require('./app'),
    passport = require('passport'),
    AnonymousStrategy = require('passport-anonymous').Strategy;


    passport.use(new AnonymousStrategy());
    app.use(passport.initialize());


module.exports = passport
