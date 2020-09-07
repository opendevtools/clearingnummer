import { allBanks, bankName, clearingNumbers } from '../index'

describe('#bankName', () => {
  test.each([
    [undefined, ''],
    ['', ''],
    [0, ''],
    [52, ''],
  ])('handles %s', (input, expected) => {
    expect(bankName(input)).toEqual(expected)
  })

  test.each([
    ['Avanza Bank', 9550, 9569],
    ['Bank of China (Luxembourg)', 9620, 9629],
    ['Bankernas Automatbolag', 9952, 9952],
    ['Bluestep Finans', 9680, 9689],
    ['Calyon Bank', 9080, 9089],
    ['Citibank', 9040, 9049],
    ['Danske Bank', 1200, 1399],
    ['Danske Bank', 2400, 2499],
    ['Danske Bank', 9180, 9189],
    ['DNB Bank', 9190, 9199],
    ['DNB Bank', 9260, 9269],
    ['Ekobanken', 9700, 9709],
    ['Erik Penser Bankaktiebolag', 9590, 9599],
    ['Exchange Finans Europe', 9580, 9589],
    ['Folkia', 9690, 9699],
    ['Forex Bank', 9400, 9449],
    ['Fortis Bank', 9470, 9479],
    ['FTCS', 9770, 9779],
    ['Handelsbanken', 6000, 6999],
    ['ICA Banken', 9270, 9279],
    ['IKANO Bank', 9170, 9179],
    ['JAK Medlemsbank', 9670, 9679],
    ['Klarna Bank', 9780, 9789],
    ['Kommuninvest', 9955, 9955],
    ['Kortaccept Nordic', 9954, 9954],
    ['Landshypotek', 9390, 9399],
    ['Lån & Spar Bank', 9630, 9639],
    ['Länsförsäkringar Bank', 3400, 3409],
    ['Länsförsäkringar Bank', 9020, 9029],
    ['Länsförsäkringar Bank', 9060, 9069],
    ['Marginalen Bank', 9230, 9239],
    ['MedMera Bank', 9650, 9659],
    ['Nasdaq-OMX', 9870, 9879],
    ['Netfonds Bank (ub)', 9720, 9729],
    ['Nordax Finans', 9640, 9649],
    ['Nordea', 1100, 1199],
    ['Nordea', 1400, 2099],
    ['Nordea', 3000, 3399],
    ['Nordea', 3410, 4999],
    ['Nordea', 9500, 9549],
    ['Nordea', 9960, 9969],
    ['Nordnet Bank', 9100, 9109],
    ['Pareto Öhman', 9380, 9389],
    ['Privatgirot', 9860, 9869],
    ['RBS', 9090, 9099],
    ['Resurs Bank', 9280, 9289],
    ['Riksgälden', 9880, 9899],
    ['SBAB Bank', 9250, 9259],
    ['SEB', 5000, 5999],
    ['SEB', 9120, 9124],
    ['SEB', 9130, 9149],
    ['Santander Consumer Bank', 9460, 9469],
    ['Skandiabanken', 9150, 9169],
    ['Sparbanken Syd', 9570, 9579],
    ['Svea Bank', 9660, 9669],
    ['Sveriges Riksbank', 1000, 1099],
    ['Swedbank', 7000, 8999],
    ['Swedbank', 9300, 9349],
    ['Teller Branch Norway', 9951, 9951],
    ['Teller Branch Sweden', 9953, 9953],
    ['Volvofinans Bank', 9610, 9619],
    ['VP Securities A/S', 9956, 9956],
    ['Ålandsbanken', 2300, 2399],
  ])('%s (%s-%s)', (bank, min, max) => {
    return new Array(1 + max - min)
      .fill(0)
      .map((v) => min + v)
      .forEach((value) => {
        expect(bankName(value)).toEqual(bank)
      })
  })

  test.each([
    ['8060-6', 'Swedbank'],
    ['8079-6', 'Swedbank'],
    ['8304-8', 'Swedbank'],
    ['8305-5', 'Swedbank'],
    ['8313-9', 'Swedbank'],
    ['8314-7', 'Swedbank'],
    ['8327-9', 'Swedbank'],
    ['8383-2', 'Swedbank'],
    ['8393-1', 'Swedbank'],
    ['8431-9', 'Swedbank'],
    ['8424-4', 'Swedbank'],
    ['8055-6', 'Sparbanken Gotland'],
    ['8158-8', 'Kinda-Ydre sparbank'],
    ['8164-6', 'Lekebergs sparbank'],
    ['8217-2', 'Markaryds sparbank'],
    ['8250-3', 'Närs sparbank'],
    ['8289-1', 'Sparbanken Skaraborg'],
    ['8295-8', 'Skurups sparbank'],
    ['8331-1', 'Häradssparbanken Mönsterås'],
    ['8336-0', 'Fryksdalens sparbank'],
    ['8321-2', 'Sölvesborg-Mjällby sparbank'],
    ['8388-1', 'Varbergs sparbank'],
    ['8380-8', 'Ulricehamns Sparbank'],
  ])('handles special clearing number %s', (input, expected) => {
    expect(bankName(input)).toEqual(expected)
  })
})

describe('#clearingNumbers', () => {
  it('handles undefined', () => {
    expect(clearingNumbers()).toEqual([])
  })

  it('should return clearing numbers of a provided bank name', () => {
    expect(clearingNumbers('SEB')).toEqual([
      {
        max: 5999,
        min: 5000,
      },
      {
        max: 9124,
        min: 9120,
      },
      {
        max: 9149,
        min: 9130,
      },
    ])
  })

  it('returns an empty array if nothing is found', () => {
    expect(clearingNumbers('NonExistantBank')).toEqual([])
  })
})

describe('#allBanks', () => {
  it('should return a list', () => {
    expect(allBanks().length > 0).toBe(true)
  })

  it('should return a list of banks', () => {
    expect(allBanks().filter((bank) => bank === 'SEB')).toHaveLength(1)
  })
})
