'use strict';

const
    app = require('../infrastructure/app'),
    passport = require('../infrastructure/passport'),
    getNameRandom = require('../queries/get-name-random'),
    getNames = require('../queries/get-names');

let router = function () {
    app.get('/api/name/:gender(male|female)?',
        passport.authenticate(['basic', 'anonymous'], {
            session: false
        }),
        function (req, res) {

            let name = getNameRandom.execute(req.params.gender);

            res.json(name);
        });
    
    app.get('/api/names/', (req, res) => {
        
        let names = getNames.execute(req.query.quantity, req.query.gender);

        res.json(names);
    })
};

module.exports = router;