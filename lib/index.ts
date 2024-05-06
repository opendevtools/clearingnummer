import banks, { type Range } from './clearingNumbers'

type Clearingnummer = string | number

const isInput = (input: Clearingnummer, value: string | number) =>
  value.toString() === input?.toString()

const withinRange = (input: Clearingnummer, { max, min }: Range) =>
  input > min && input < max

const isBoundaryValue = (input: Clearingnummer, { max, min }: Range) =>
  isInput(input, min) || isInput(input, max)

const findBank = (input: Clearingnummer) => (range: Range) =>
  isBoundaryValue(input, range) || withinRange(input, range)

export const bankName = (input: Clearingnummer): string =>
  banks.find(({ ranges }) => !!ranges.find(findBank(input)))?.bank ?? ''

export const clearingNumbers = (name: string): Range[] =>
  banks.find(({ bank }) => bank === name)?.ranges ?? []

export const allBanks = (): string[] => banks.map((bank) => bank.bank)

export default {
  allBanks,
  bankName,
  clearingNumbers,
}
