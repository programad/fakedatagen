const
    mathHelper = require('../helpers/math-helper'),
    names = require('../model/names');

let getNameRandom = {
  execute: function(){
    var randomNumber = mathHelper.randomInt(0, names.length-1);

    console.log(randomNumber);
    return names[randomNumber];
  }
}

module.exports = getNameRandom;