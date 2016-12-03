'use strict';

const
    environment = process.env.NODE_ENV || 'development',
    PORT = process.env.PORT || 8080,
    app = require('./api/infrastructure/app'),
    passport = require('./api/infrastructure/passport'),
    nameRouter = require('./api/routes/name.router')();

app.get('*', function (request, response, next) {
    response.sendFile(__dirname + '/dev/index.html');
});

app.listen(PORT, () => {

    console.log(`Running at http://localhost:${PORT}`);

});