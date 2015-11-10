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

  var results = _.first(_.compact(inRange));
  return results ? results.bank : '';
}

function clearingNumbers (bankName) {
  return _.find(banks, function (bank) {
    return bank.bank === bankName;
  }).ranges;
}

function allBanks () {
  return banks.map(function (bank) {
    return bank.bank
  });
}

module.exports = {
  bankName: bankName,
  clearingNumbers: clearingNumbers,
  allBanks: allBanks
};
