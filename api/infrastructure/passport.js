'use strict';

const
    app = require('./app'),
    passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy,
    AnonymousStrategy = require('passport-anonymous').Strategy;
    // TODO acrescentar query de obter usuario


    passport.use(new BasicStrategy({
      },
      function(username, password, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            console.log(username);
            console.log(password);
          // Find the user by username.  If there is no user with the given
          // username, or the password is not correct, set the user to `false` to
          // indicate failure.  Otherwise, return the authenticated `user`.

          // TODO chamar query de obter usuario e validar login
          // findByUsername(username, function(err, user) {
          //   console.log(username);
          //   if (err) { return done(err); }
          //   if (!user) { return done(null, false); }
          //   if (user.password != password) { return done(null, false); }
          //   return done(null, user);
          // })
        });
      }
    ));

    passport.use(new AnonymousStrategy());
    app.use(passport.initialize());

module.exports = passport
