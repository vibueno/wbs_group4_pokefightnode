const validations = {
  validId: val => {
    const re = new RegExp('^[1-9]d*$', 'i');
    return re.test(val);
  },
};

module.exports = validations;
