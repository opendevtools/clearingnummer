import banks from './clearingNumbers'

export function bankName(number?: string | number): string {
  if (
    number === undefined ||
    (typeof number === 'string' && number.length === 0)
  ) {
    throw new Error('A string or number is required')
  }

  const numberString = number.toString()

  const found = banks.find(({ ranges }) => {
    return !!ranges.find(({ min, max }) => {
      var minString = min.toString()
      var maxString = max.toString()

      return (
        minString === numberString ||
        maxString === numberString ||
        (number > min && number < max)
      )
    })
  })

  return found ? found.bank : ''
}

export function clearingNumbers(bankName?: string) {
  const bank = banks.find(({ bank }) => bank === bankName)

  return bank ? bank.ranges : []
}

export function allBanks() {
  return banks.map(bank => bank.bank)
}

export default {
  allBanks,
  bankName,
  clearingNumbers
}
