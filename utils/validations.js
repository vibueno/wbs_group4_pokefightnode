const { validInfoRequests } = require('../variables/constants');

const validations = {
  validId: val => {
    const re = new RegExp('^[1-9]\\d*$', 'i');
    return re.test(val);
  },

  validInfoRequest: val => {
    return validInfoRequests.includes(val) ? true : false;
  },

  validFightResultFormat: fightResult => {
    return fightResult.pokemon1 &&
      fightResult.pokemon2 &&
      fightResult.winner &&
      Object.keys(fightResult).length === 3
      ? true
      : false;
  },
};

module.exports = validations;
