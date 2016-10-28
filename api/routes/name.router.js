'use strict';

const
    app = require('../infrastructure/app'),
    getName = require('../queries/get-name');

let names = function(){
    app.get('/api/name', function(req, res) {
        passport.authenticate(['basic', 'anonymous'], { session: false });

        let name = getName.execute();

        res.json(name);
    });
};

module.exports = names;
