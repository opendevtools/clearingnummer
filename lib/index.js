const banks = require('./clearingNumbers')

function bankName(number) {
  const numberString = number.toString()

  const found = banks
    .map(bank => {
      const foundBank = bank.ranges.filter(range => {
        var min = range.min.toString()
        var max = range.max.toString()

        if (
          min === numberString ||
          max === numberString ||
          (number > range.min && number < range.max)
        ) {
          return true
        }

        return false
      })

      if (foundBank.length) {
        return bank
      }
    })
    .filter(Boolean)

  return found.length ? found[0].bank : ''
}

function clearingNumbers(bankName) {
  const bank = banks.filter(bank => bank.bank === bankName)

  return bank.length ? bank[0].ranges : []
}

function allBanks() {
  return banks.map(bank => bank.bank)
}

module.exports = {
  bankName: bankName,
  clearingNumbers: clearingNumbers,
  allBanks: allBanks
}
