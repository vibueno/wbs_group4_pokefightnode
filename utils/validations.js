const { validInfoRequests } = require('./constants');

const validations = {
  validId: val => {
    const re = new RegExp('^[1-9]\\d*$', 'i');
    return re.test(val);
  },

  validInfoRequest: val => {
    return validInfoRequests.includes(val) ? true : false;
  },
};

module.exports = validations;
