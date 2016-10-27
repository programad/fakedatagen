const
    express = require('express');
    app = express(),
    PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send('Hello World from fake data generator');
});

app.listen(PORT, () => {

    console.log(`Running at http://localhost:${PORT}`);

});