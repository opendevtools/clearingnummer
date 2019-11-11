import banks from './clearingNumbers'

type Range = { max: number; min: number } | { max: string; min: string }

export function bankName(clNumber?: string | number): string {
  if (
    clNumber === undefined ||
    (typeof clNumber === 'string' && clNumber.length === 0)
  ) {
    throw new Error('A string or number is required')
  }

  const numberString = clNumber.toString()

  const found = banks.find(({ ranges }) => {
    return !!ranges.find(({ min, max }) => {
      const minString = min.toString()
      const maxString = max.toString()

      return (
        minString === numberString ||
        maxString === numberString ||
        (clNumber > min && clNumber < max)
      )
    })
  })

  return found ? found.bank : ''
}

export function clearingNumbers(name?: string): Range[] {
  const foundBank = banks.find(({ bank }) => bank === name)

  return foundBank ? foundBank.ranges : []
}

export function allBanks(): string[] {
  return banks.map(bank => bank.bank)
}

export default {
  allBanks,
  bankName,
  clearingNumbers,
}
