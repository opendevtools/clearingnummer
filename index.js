var _ = require('lodash')
var banks = require('./clearingNumbers')

function bankName (number) {
  number: string = number.toString()

  var inRange = _.map(banks, function (bank) {
    var filter = _.filter(bank.ranges, function (range) {
      var min = range.min.toString()
      var max = range.max.toString()

      return _.inRange(number, min, max) || (min === number && max === number)
    })

    if (filter.length) {
      return bank
    }
  })

  var results = _.first(_.compact(inRange))
  return results ? results.bank : ''
}

function clearingNumbers (bankName) {
  return _.find(banks, function (bank) {
    return bank.bank === bankName
  }).ranges
}

function allBanks () {
  return banks.map(function (bank) {
    return bank.bank
  })
}

module.exports = {
  bankName: bankName,
  clearingNumbers: clearingNumbers,
  allBanks: allBanks
}
