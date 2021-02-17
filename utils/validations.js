const { validInfoRequests } = require('./constants');

const validations = {
  validId: val => {
    const re = new RegExp('^[1-9]\\d*$', 'i');
    return re.test(val);
  },

  validInfoRequest: val => {
    return validInfoRequests.includes(val) ? true : false;
  },

  validWinners: (hasWon1, hasWon2) => {
    return hasWon1 != hasWon2;
  },

  isSet: value => {
    return value != null;
  },
};

module.exports = validations;
