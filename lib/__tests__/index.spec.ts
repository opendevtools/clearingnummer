import { allBanks, bankName, clearingNumbers } from '../index'

const testBankNameRange = (
  start: number,
  end: number,
  expected: string
): void => {
  return new Array(1 + end - start)
    .fill(0)
    .map(v => start + v)
    .forEach(value => {
      expect(bankName(value)).toEqual(expected)
    })
}

describe('#bankName', () => {
  it('handles undefined', () => {
    expect(() => bankName()).toThrowError('A string or number is required')
  })

  it('handles empty string', () => {
    expect(() => bankName('')).toThrowError('A string or number is required')
  })

  it('handles 0', () => {
    expect(bankName(0)).toEqual('')
  })

  it('should return empty if all are undefined', () => {
    expect(bankName(52)).toEqual('')
  })

  describe('Amfa Bank', () => {
    it('9660-9669', () => {
      testBankNameRange(9660, 9669, 'Amfa Bank')
    })
  })

  describe('Avanza Bank', () => {
    it('9550-9569', () => {
      testBankNameRange(9550, 9569, 'Avanza Bank')
    })
  })

  describe('Bank of China (Luxembourg)', () => {
    it('9620-9629', () => {
      testBankNameRange(9620, 9629, 'Bank of China (Luxembourg)')
    })
  })

  describe('Bankernas Automatbolag', () => {
    it('9952', () => {
      testBankNameRange(9952, 9952, 'Bankernas Automatbolag')
    })
  })

  describe('Bluestep Finans', () => {
    it('9680-9689', () => {
      testBankNameRange(9680, 9689, 'Bluestep Finans')
    })
  })

  describe('Calyon Bank', () => {
    it('9080-9089', () => {
      testBankNameRange(9080, 9089, 'Calyon Bank')
    })
  })

  describe('Citibank', () => {
    it('9040-9049', () => {
      testBankNameRange(9040, 9049, 'Citibank')
    })
  })

  describe('Danske Bank', () => {
    it('1200-1399', () => {
      testBankNameRange(1200, 1399, 'Danske Bank')
    })

    it('2400-2499', () => {
      testBankNameRange(2400, 2499, 'Danske Bank')
    })

    it('9180-9189', () => {
      testBankNameRange(9180, 9189, 'Danske Bank')
    })
  })

  describe('DNB Bank', () => {
    it('9190-9199', () => {
      testBankNameRange(9190, 9199, 'DNB Bank')
    })

    it('9260-9269', () => {
      testBankNameRange(9260, 9269, 'DNB Bank')
    })
  })

  describe('Ekobanken', () => {
    it('9700-9709', () => {
      testBankNameRange(9700, 9709, 'Ekobanken')
    })
  })

  describe('Erik Penser Bankaktiebolagp', () => {
    it('9590-9599', () => {
      testBankNameRange(9590, 9599, 'Erik Penser Bankaktiebolag')
    })
  })

  describe('Exchange Finans Europe', () => {
    it('9580-9589', () => {
      testBankNameRange(9580, 9589, 'Exchange Finans Europe')
    })
  })

  describe('Folkia', () => {
    it('9690-9699', () => {
      testBankNameRange(9690, 9699, 'Folkia')
    })
  })

  describe('Forex Bank', () => {
    it('9400-9449', () => {
      testBankNameRange(9400, 9449, 'Forex Bank')
    })
  })

  describe('Fortis Bank', () => {
    it('9470-9479', () => {
      testBankNameRange(9470, 9479, 'Fortis Bank')
    })
  })

  describe('GE Money Bank', () => {
    it('9460-9469', () => {
      testBankNameRange(9460, 9469, 'GE Money Bank')
    })
  })

  describe('Handelsbanken', () => {
    it('6000-6999', () => {
      testBankNameRange(6000, 6999, 'Handelsbanken')
    })
  })

  describe('ICA Banken', () => {
    it('9270-9279', () => {
      testBankNameRange(9270, 9279, 'ICA Banken')
    })
  })

  describe('IKANO Bank', () => {
    it('9170-9179', () => {
      testBankNameRange(9170, 9179, 'IKANO Bank')
    })
  })

  describe('JAK Medlemsbank', () => {
    it('9670-9679', () => {
      testBankNameRange(9670, 9679, 'JAK Medlemsbank')
    })
  })

  describe('Kommuninvest', () => {
    it('9955', () => {
      testBankNameRange(9955, 9955, 'Kommuninvest')
    })
  })

  describe('Kortaccept Nordic', () => {
    it('9954', () => {
      testBankNameRange(9954, 9954, 'Kortaccept Nordic')
    })
  })

  describe('Landshypotek', () => {
    it('9390-9399', () => {
      testBankNameRange(9390, 9399, 'Landshypotek')
    })
  })

  describe('Lån & Spar Bank', () => {
    it('9630-9639', () => {
      testBankNameRange(9630, 9639, 'Lån & Spar Bank')
    })
  })

  describe('Länsförsäkringar Bank', () => {
    it('3400-3409', () => {
      testBankNameRange(3400, 3409, 'Länsförsäkringar Bank')
    })

    it('9020-9029', () => {
      testBankNameRange(9020, 9029, 'Länsförsäkringar Bank')
    })

    it('9060-9069', () => {
      testBankNameRange(9060, 9069, 'Länsförsäkringar Bank')
    })
  })

  describe('Marginalen Bank', () => {
    it('9230-9239', () => {
      testBankNameRange(9230, 9239, 'Marginalen Bank')
    })
  })

  describe('MedMera Bank', () => {
    it('9650-9659', () => {
      testBankNameRange(9650, 9659, 'MedMera Bank')
    })
  })

  describe('Nasdaq-OMX', () => {
    it('9870-9879', () => {
      testBankNameRange(9870, 9879, 'Nasdaq-OMX')
    })
  })

  describe('Netfonds Bank (ub)', () => {
    it('9720-9729', () => {
      testBankNameRange(9720, 9729, 'Netfonds Bank (ub)')
    })
  })

  describe('Nordax Finans', () => {
    it('9640-9649', () => {
      testBankNameRange(9640, 9649, 'Nordax Finans')
    })
  })

  describe('Nordea', () => {
    it('1100-1199', () => {
      testBankNameRange(1100, 1199, 'Nordea')
    })

    it('1400-2099', () => {
      testBankNameRange(1400, 2099, 'Nordea')
    })

    it('3000-3399', () => {
      testBankNameRange(3000, 3399, 'Nordea')
    })

    it('3410-4999', () => {
      testBankNameRange(3410, 4999, 'Nordea')
    })

    it('9500-9549', () => {
      testBankNameRange(9500, 9549, 'Nordea')
    })

    it('9960-9969', () => {
      testBankNameRange(9960, 9969, 'Nordea')
    })
  })

  describe('Nordnet Bank', () => {
    it('9100-9109', () => {
      testBankNameRange(9100, 9109, 'Nordnet Bank')
    })
  })

  describe('Pareto Öhman', () => {
    it('9380-9389', () => {
      testBankNameRange(9380, 9389, 'Pareto Öhman')
    })
  })

  describe('Privatgirot', () => {
    it('9860-9869', () => {
      testBankNameRange(9860, 9869, 'Privatgirot')
    })
  })

  describe('RBS', () => {
    it('9090-9099', () => {
      testBankNameRange(9090, 9099, 'RBS')
    })
  })

  describe('Resurs Bank', () => {
    it('9280-9289', () => {
      testBankNameRange(9280, 9289, 'Resurs Bank')
    })
  })

  describe('Riksgälden', () => {
    it('9880-9899', () => {
      testBankNameRange(9880, 9899, 'Riksgälden')
    })
  })

  describe('SBAB Bank', () => {
    it('9250-9259', () => {
      testBankNameRange(9250, 9259, 'SBAB Bank')
    })
  })

  describe('SEB', () => {
    it('5000-5999', () => {
      testBankNameRange(5000, 5999, 'SEB')
    })

    it('9120-9124', () => {
      testBankNameRange(9120, 9124, 'SEB')
    })

    it('9130-9149', () => {
      testBankNameRange(9130, 9149, 'SEB')
    })
  })

  describe('Skandiabanken', () => {
    it('9150-9169', () => {
      testBankNameRange(9150, 9169, 'Skandiabanken')
    })
  })

  describe('Sparbanken Syd', () => {
    it('9570-9579', () => {
      testBankNameRange(9570, 9579, 'Sparbanken Syd')
    })
  })

  describe('Sveriges Riksbank', () => {
    it('1000-1099', () => {
      testBankNameRange(1000, 1099, 'Sveriges Riksbank')
    })
  })

  describe('Swedbank', () => {
    it('7000-8999', () => {
      testBankNameRange(7000, 8999, 'Swedbank')
    })

    it('9300-9349', () => {
      testBankNameRange(9300, 9349, 'Swedbank')
    })

    it('Special numbers', () => {
      expect(bankName('8060-6')).toEqual('Swedbank')
      expect(bankName('8079-6')).toEqual('Swedbank')
      expect(bankName('8304-8')).toEqual('Swedbank')
      expect(bankName('8305-5')).toEqual('Swedbank')
      expect(bankName('8313-9')).toEqual('Swedbank')
      expect(bankName('8314-7')).toEqual('Swedbank')
      expect(bankName('8327-9')).toEqual('Swedbank')
      expect(bankName('8383-2')).toEqual('Swedbank')
      expect(bankName('8393-1')).toEqual('Swedbank')
      expect(bankName('8431-9')).toEqual('Swedbank')
      expect(bankName('8424-4')).toEqual('Swedbank')
    })

    it('Sparbanken Gotland', () => {
      expect(bankName('8055-6')).toEqual('Sparbanken Gotland')
    })

    it('Kinda-Ydre sparbank', () => {
      expect(bankName('8158-8')).toEqual('Kinda-Ydre sparbank')
    })

    it('Lekebergs sparbank', () => {
      expect(bankName('8164-6')).toEqual('Lekebergs sparbank')
    })

    it('Markaryds sparbank', () => {
      expect(bankName('8217-2')).toEqual('Markaryds sparbank')
    })

    it('Närs sparbank', () => {
      expect(bankName('8250-3')).toEqual('Närs sparbank')
    })

    it('Sparbanken Skaraborg', () => {
      expect(bankName('8289-1')).toEqual('Sparbanken Skaraborg')
    })

    it('Skurups sparbank', () => {
      expect(bankName('8295-8')).toEqual('Skurups sparbank')
    })

    it('Häradssparbanken Mönsterås', () => {
      expect(bankName('8331-1')).toEqual('Häradssparbanken Mönsterås')
    })

    it('Fryksdalens sparbank', () => {
      expect(bankName('8336-0')).toEqual('Fryksdalens sparbank')
    })

    it('Sölvesborg-Mjällby sparbank', () => {
      expect(bankName('8321-2')).toEqual('Sölvesborg-Mjällby sparbank')
    })

    it('Varbergs sparbank', () => {
      expect(bankName('8388-1')).toEqual('Varbergs sparbank')
    })
  })

  describe('Teller Branch Norway', () => {
    it('9951', () => {
      testBankNameRange(9951, 9951, 'Teller Branch Norway')
    })
  })

  describe('Teller Branch Sweden', () => {
    it('9953', () => {
      testBankNameRange(9953, 9953, 'Teller Branch Sweden')
    })
  })

  describe('Volvofinans Bank', () => {
    it('9610-9619', () => {
      testBankNameRange(9610, 9619, 'Volvofinans Bank')
    })
  })

  describe('VP Securities A/S', () => {
    it('9956', () => {
      testBankNameRange(9956, 9956, 'VP Securities A/S')
    })
  })

  describe('Ålandsbanken', () => {
    it('2300-2399', () => {
      testBankNameRange(2300, 2399, 'Ålandsbanken')
    })
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
    expect(allBanks().filter(bank => bank === 'SEB')).toHaveLength(1)
  })
})
