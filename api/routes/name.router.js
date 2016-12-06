'use strict';

const
    app = require('../infrastructure/app'),
    passport = require('../infrastructure/passport'),
    getNameRandom = require('../queries/get-name-random');

let names = function () {
    app.get('/api/name/random',
        // passport.authenticate(['basic', 'anonymous'], {
        //     session: false
        // }),
        function (req, res) {
            let name = getNameRandom.execute();

            res.json(name);
        });
};

module.exports = names;