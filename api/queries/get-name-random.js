const
  randomHelper = require('../helpers/random-helper'),
  enums = require('../model/enums'),
  surnames = require('../model/surnames'),
  names = require('../model/names');

let getNameRandom = {
  execute: function (gender) {
    let nameModel;

    switch (enums.genders[gender]) {
      case enums.genders.male:
        nameModel = names.maleNames;
        break;
      case enums.genders.female:
        nameModel = names.femaleNames;
        break;    
      default:
        nameModel = randomHelper.randomBool() ? names.maleNames : names.femaleNames;
        break;
    }

    let firstName = nameModel[randomHelper.randomInt(0, nameModel.length - 1)];

    let qSurnames = randomHelper.randomInt(1, 4);
    let name = [];
    name.push(firstName);

    for (var i = 0; i < qSurnames; i++) {
      let currentSurname = surnames[randomHelper.randomInt(0, surnames.length - 1)];

      if (name.indexOf(currentSurname) === -1) {
        name.push(currentSurname);
      }
    }

    return name.join(' ');
  }
}

module.exports = getNameRandom;