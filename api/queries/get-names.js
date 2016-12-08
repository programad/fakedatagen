const
  randomName = require('./get-name-random');

let names = {
    execute: function(quantity, gender) {
        let names = [];

        for (var i = 0; i < quantity; i++) {
            var name = randomName.execute(gender);
            
            names.push(name);
        }

        return names;
    }
};

module.exports = names;