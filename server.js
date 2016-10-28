const
    environment = process.env.NODE_ENV || 'development',
    PORT = process.env.PORT || 8080,
    express = require('express');
    app = require('./api/infrastructure/app'),
    passport = require('./api/infrastructure/passport'),
    nameRouter = require('./api/routes/name.router')();


app.listen(PORT, () => {

    console.log(`Running at http://localhost:${PORT}`);

});
