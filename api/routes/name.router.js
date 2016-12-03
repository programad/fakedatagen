'use strict';

const
    app = require('../infrastructure/app'),
    passport = require('../infrastructure/passport'),
    getName = require('../queries/get-name');

let names = function(){
    app.get('/api/name',
        passport.authenticate(['basic', 'anonymous'], { session: false }),
        function(req, res) {
          let name = getName.execute();

          res.json(name);
        });
};

module.exports = names;
