var randomInt = (function (min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
});

var randomFloat = (function (min,max)
{
    return Math.random()*(max-min)+min;
});

var randomBool = (function ()
{
    return randomFloat(0, 1) > 0.5;
});

exports.randomInt = randomInt;
exports.randomFloat = randomFloat;
exports.randomBool = randomBool;

