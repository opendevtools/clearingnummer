var _ = require('lodash');
var banks = require('./clearingNumbers');

function bankName (number) {
  var inRange = _.map(banks, function (bank) {
      var filter = _.filter(bank.ranges, function (range) {
        return _.inRange(number, range.min, range.max) || (range.min === number && range.max === number);
      });

      if (filter.length) {
        return bank;
      }
    })

  return _.first(_.compact(inRange)).bank || '';
}

function clearingNumbers (bankName) {
  return _.find(banks, function (bank) {
    return bank.bank === bankName;
  }).ranges;
}

module.exports = {
  bankName: bankName,
  clearingNumbers: clearingNumbers
};
