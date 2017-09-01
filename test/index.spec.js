const { bankName, clearingNumbers, allBanks } = require('../lib/index')

describe('#bankName', () => {
  it('returns correct bank for range 1000-1099', () => {
    expect(bankName(1000)).toEqual('Sveriges riksbank')
    expect(bankName(1050)).toEqual('Sveriges riksbank')
    expect(bankName(1099)).toEqual('Sveriges riksbank')
  })

  it('should return correct name for range 1100-1199', () => {
    expect(bankName(1100)).toEqual('Nordea')
    expect(bankName(1150)).toEqual('Nordea')
    expect(bankName(1199)).toEqual('Nordea')
  })

  it('should return correct name for range 1200-1399', () => {
    expect(bankName(1205)).toEqual('Danske Bank')
  })

  it('should return correct name for range 1400-2099', () => {
    expect(bankName(1400)).toEqual('Nordea')
    expect(bankName(1999)).toEqual('Nordea')
    expect(bankName(2099)).toEqual('Nordea')
  })

  it('should return correct name for 2310', () => {
    expect(bankName(2300)).toEqual('Ålandsbanken')
    expect(bankName(2310)).toEqual('Ålandsbanken')
    expect(bankName(2399)).toEqual('Ålandsbanken')
  })

  it('should return correct name for range 2400-2499', () => {
    expect(bankName(2400)).toEqual('Danske Bank')
    expect(bankName(2485)).toEqual('Danske Bank')
    expect(bankName(2499)).toEqual('Danske Bank')
  })

  it('should return correct name for 2950', () => {
    expect(bankName(2950)).toEqual('Sambox')
  })

  it('should return correct name for range 3000-3299', () => {
    expect(bankName(3000)).toEqual('Nordea')
    expect(bankName(3158)).toEqual('Nordea')
    expect(bankName(3299)).toEqual('Nordea')
  })

  it('should return correct name for 3300', () => {
    expect(bankName(3300)).toEqual('Nordea Personkonto')
  })

  it('should return correct name for range 3301-3399', () => {
    expect(bankName(3301)).toEqual('Nordea')
    expect(bankName(3350)).toEqual('Nordea')
    expect(bankName(3399)).toEqual('Nordea')
  })

  it('should return correct name for range 3400-3409', () => {
    expect(bankName(3400)).toEqual('Länsförsäkringar Bank')
    expect(bankName(3405)).toEqual('Länsförsäkringar Bank')
    expect(bankName(3409)).toEqual('Länsförsäkringar Bank')
  })

  it('should return correct name for range 3410-3781', () => {
    expect(bankName(3410)).toEqual('Nordea')
    expect(bankName(3520)).toEqual('Nordea')
    expect(bankName(3781)).toEqual('Nordea')
  })

  it('should return correct name for 3782', () => {
    expect(bankName(3782)).toEqual('Nordea Personkonto')
  })

  it('should return correct name for range 3783-4999', () => {
    expect(bankName(3783)).toEqual('Nordea')
    expect(bankName(4520)).toEqual('Nordea')
    expect(bankName(4999)).toEqual('Nordea')
  })

  it('should return correct name for range 5000-5999', () => {
    expect(bankName(5000)).toEqual('SEB')
    expect(bankName(5202)).toEqual('SEB')
    expect(bankName(5999)).toEqual('SEB')
  })

  it('should return correct name for range 6000-6999', () => {
    expect(bankName(6000)).toEqual('Handelsbanken')
    expect(bankName(6187)).toEqual('Handelsbanken')
    expect(bankName(6999)).toEqual('Handelsbanken')
  })

  it('should return correct name for range 7000-7120', () => {
    expect(bankName(7000)).toEqual('Swedbank')
    expect(bankName(7059)).toEqual('Swedbank')
    expect(bankName(7120)).toEqual('Swedbank')
  })

  it('should return correct name for range 7121-7122', () => {
    expect(bankName(7121)).toEqual('Sparbanken i Enköping')
  })

  it('should return correct name for range 7123-8104', () => {
    expect(bankName(7123)).toEqual('Swedbank')
    expect(bankName(8054)).toEqual('Swedbank')
    expect(bankName(8104)).toEqual('Swedbank')
  })

  it('should return correct name for 7980', () => {
    expect(bankName(7980)).toEqual('Swedbank')
  })

  it('should return correct name for 8079-6', () => {
    expect(bankName('8079-6')).toEqual('Färs & Frosta Sparbank')
  })

  it('should return correct name for 8105', () => {
    expect(bankName(8105)).toEqual('Swedbank')
  })

  it('should return correct name for range 8106-8999', () => {
    expect(bankName(8564)).toEqual('Swedbank')
  })

  it('should return correct name for 8257', () => {
    expect(bankName(8257)).toEqual('Swedbank')
  })

  it('should return correct name for 8264', () => {
    expect(bankName(8264)).toEqual('Sparbanken Nord')
  })

  it('should return correct name for 8284', () => {
    expect(bankName(8284)).toEqual('Sala Sparbank')
  })

  it('should return correct name for 8304-8', () => {
    expect(bankName('8304-8')).toEqual('Sparbanken Alingsås')
  })

  it('should return correct name for 8305-5', () => {
    expect(bankName('8305-5')).toEqual('Sparbanken i Enköping')
  })

  it('should return correct name for 8313-9', () => {
    expect(bankName('8313-9')).toEqual('Sparbanken 1826')
  })

  it('should return correct name for 8383-2', () => {
    expect(bankName('8383-2')).toEqual('Swedbank')
  })

  it('should return correct name for 8393-1', () => {
    expect(bankName('8393-1')).toEqual('Lönneberga-Tuna-Vena Sparbank')
  })

  it('should return correct name for 8055-6', () => {
    expect(bankName('8055-6')).toEqual('Sparbanken Gotland')
  })

  it('should return correct name for 8060-6', () => {
    expect(bankName('8060-6')).toEqual('Falkenbergs sparbank')
  })

  it('should return correct name for 8158-8', () => {
    expect(bankName('8158-8')).toEqual('Kinda-Ydre sparbank')
  })

  it('should return correct name for 8164-6', () => {
    expect(bankName('8164-6')).toEqual('Lekebergs sparbank')
  })

  it('should return correct name for 8217-2', () => {
    expect(bankName('8217-2')).toEqual('Markaryds sparbank')
  })

  it('should return correct name for 8250-3', () => {
    expect(bankName('8250-3')).toEqual('Närs sparbank')
  })

  it('should return correct name for 8289-1', () => {
    expect(bankName('8289-1')).toEqual('Sparbanken Skaraborg')
  })

  it('should return correct name for 8295-8', () => {
    expect(bankName('8295-8')).toEqual('Skurups sparbank')
  })

  it('should return correct name for 8304-8', () => {
    expect(bankName('8304-8')).toEqual('Sparbanken Alingsås')
  })

  it('should return correct name for 8305-5', () => {
    expect(bankName('8305-5')).toEqual('Sparbanken i Enköping')
  })

  it('should return correct name for 8314-7', () => {
    expect(bankName('8314-7')).toEqual('Sparbanken Lidköping')
  })

  it('should return correct name for 8331-1', () => {
    expect(bankName('8331-1')).toEqual('Häradssparbanken Mönsterås')
  })

  it('should return correct name for 8336-0', () => {
    expect(bankName('8336-0')).toEqual('Fryksdalens sparbank')
  })

  it('should return correct name for 8321-2', () => {
    expect(bankName('8321-2')).toEqual('Sölvesborg-Mjällby sparbank')
  })

  it('should return correct name for 8431-9', () => {
    expect(bankName('8431-9')).toEqual('Swedbank')
  })

  it('should return correct name for range 9020-9029', () => {
    expect(bankName(9020)).toEqual('Länsförsäkringar Bank')
    expect(bankName(9025)).toEqual('Länsförsäkringar Bank')
    expect(bankName(9029)).toEqual('Länsförsäkringar Bank')
  })

  it('should return correct name for range 9040-9049', () => {
    expect(bankName(9040)).toEqual('Citibank')
    expect(bankName(9047)).toEqual('Citibank')
    expect(bankName(9049)).toEqual('Citibank')
  })

  it('should return correct name for range 9060-9069', () => {
    expect(bankName(9061)).toEqual('Länsförsäkringar Bank')
  })

  it('should return correct name for 9080-9089', () => {
    expect(bankName(9080)).toEqual('Calyon Bank')
    expect(bankName(9089)).toEqual('Calyon Bank')
  })

  it('should return correct name for range 9090-9099', () => {
    expect(bankName(9090)).toEqual('Royal Bank of Scotland')
    expect(bankName(9091)).toEqual('Royal Bank of Scotland')
    expect(bankName(9099)).toEqual('Royal Bank of Scotland')
  })

  it('should return correct name for 9100-9109', () => {
    expect(bankName(9100)).toEqual('Nordnet Bank')
    expect(bankName(9109)).toEqual('Nordnet Bank')
  })

  it('should return correct name for range 9120-9124', () => {
    expect(bankName(9121)).toEqual('SEB')
  })

  it('should return correct name for range 9130-9149', () => {
    expect(bankName(9135)).toEqual('SEB')
  })

  it('should return correct name for range 9150-9169', () => {
    expect(bankName(9155)).toEqual('Skandiabanken')
  })

  it('should return correct name for range 9170-9179', () => {
    expect(bankName(9175)).toEqual('Ikano Bank')
  })

  it('should return correct name for range 9180-9189', () => {
    expect(bankName(9180)).toEqual('Danske Bank')
    expect(bankName(9189)).toEqual('Danske Bank')
  })

  it('should return correct name for range 9190-9199', () => {
    expect(bankName(9190)).toEqual('DNB Bank')
    expect(bankName(9195)).toEqual('DNB Bank')
    expect(bankName(9199)).toEqual('DNB Bank')
  })

  it('should return correct name for range 9230-9239', () => {
    expect(bankName(9230)).toEqual('Marginalen Bank')
    expect(bankName(9239)).toEqual('Marginalen Bank')
  })

  it('should return correct name for range 9250-9259', () => {
    expect(bankName(9250)).toEqual('SBAB Bank')
    expect(bankName(9259)).toEqual('SBAB Bank')
  })

  it('should return correct name for range 9260-9269', () => {
    expect(bankName(9268)).toEqual('DNB Bank')
  })

  it('should return correct name for range 9270-9279', () => {
    expect(bankName(9278)).toEqual('ICA Banken')
  })

  it('should return correct name for range 9280-9289', () => {
    expect(bankName(9282)).toEqual('Resurs Bank')
  })

  it('should return correct name for 9300-9349', () => {
    expect(bankName(9300)).toEqual('Swedbank')
    expect(bankName(9349)).toEqual('Swedbank')
  })

  it('returns correct name for range 9380-9389', () => {
    expect(bankName(9380)).toEqual('Pareto Öhman')
    expect(bankName(9389)).toEqual('Pareto Öhman')
  })

  it('returns correct name for range 9390-9399', () => {
    expect(bankName(9390)).toEqual('Landshypotek Bank')
    expect(bankName(9399)).toEqual('Landshypotek Bank')
  })

  it('should return correct name for range 9400-9449', () => {
    expect(bankName(9435)).toEqual('Forex Bank')
  })

  it('should return correct name for 9460-9469', () => {
    expect(bankName(9460)).toEqual('Santander Consumer Bank')
    expect(bankName(9469)).toEqual('Santander Consumer Bank')
  })

  it('should return correct name for 9470-9479', () => {
    expect(bankName(9470)).toEqual('Fortis Bank')
    expect(bankName(9479)).toEqual('Fortis Bank')
  })

  it('should return correct name for 9480-9489', () => {
    expect(bankName(9480)).toEqual('Parex Bank')
    expect(bankName(9489)).toEqual('Parex Bank')
  })

  it('should return correct name for range 9500-9549', () => {
    expect(bankName(9500)).toEqual('Nordea')
    expect(bankName(9543)).toEqual('Nordea')
    expect(bankName(9549)).toEqual('Nordea')
  })

  it('should return correct name for 9550-9569', () => {
    expect(bankName(9550)).toEqual('Avanza Bank')
    expect(bankName(9559)).toEqual('Avanza Bank')
  })

  it('should return correct name for range 9570-9579', () => {
    expect(bankName(9570)).toEqual('Sparbanken Syd')
    expect(bankName(9579)).toEqual('Sparbanken Syd')
  })

  it('should return correct name for range 9580-9589', () => {
    expect(bankName(9580)).toEqual('Exchange Finans Europe')
    expect(bankName(9589)).toEqual('Exchange Finans Europe')
  })

  it('should return correct name for range 9590-9599', () => {
    expect(bankName(9590)).toEqual('Erik Penser Bankaktiebolag')
    expect(bankName(9599)).toEqual('Erik Penser Bankaktiebolag')
  })

  it('should return correct name for range 9610-9619', () => {
    expect(bankName(9610)).toEqual('Volvofinans Bank')
    expect(bankName(9619)).toEqual('Volvofinans Bank')
  })

  it('should return correct name for range 9620-9629', () => {
    expect(bankName(9620)).toEqual('Bank of China (Luxembourg)')
    expect(bankName(9629)).toEqual('Bank of China (Luxembourg)')
  })

  it('should return correct name for range 9630-9639', () => {
    expect(bankName(9630)).toEqual('Lån & Spar Bank')
    expect(bankName(9639)).toEqual('Lån & Spar Bank')
  })

  it('should return correct name for range 9640-9649', () => {
    expect(bankName(9640)).toEqual('Nordax Finans')
    expect(bankName(9649)).toEqual('Nordax Finans')
  })

  it('should return correct name for range 9650-9659', () => {
    expect(bankName(9650)).toEqual('MedMera Bank')
    expect(bankName(9659)).toEqual('MedMera Bank')
  })

  it('should return correct name for range 9660-9669', () => {
    expect(bankName(9660)).toEqual('Amfa Bank')
    expect(bankName(9669)).toEqual('Amfa Bank')
  })

  it('should return correct name for 9670-9679', () => {
    expect(bankName(9670)).toEqual('JAK Medlemsbank')
    expect(bankName(9679)).toEqual('JAK Medlemsbank')
  })

  it('should return correct name for 9680-9689', () => {
    expect(bankName(9680)).toEqual('Bluestep Finans')
    expect(bankName(9689)).toEqual('Bluestep Finans')
  })

  it('should return correct name for 9690-9699', () => {
    expect(bankName(9690)).toEqual('Folkia')
    expect(bankName(9699)).toEqual('Folkia')
  })

  it('should return correct name for 9700-9709', () => {
    expect(bankName(9700)).toEqual('Ekobanken')
    expect(bankName(9709)).toEqual('Ekobanken')
  })

  it('should return correct name for 9860-9869', () => {
    expect(bankName(9860)).toEqual('Privatgirot')
    expect(bankName(9869)).toEqual('Privatgirot')
  })

  it('should return correct name for 9870-9879', () => {
    expect(bankName(9870)).toEqual('Nasdaq-OMX')
    expect(bankName(9879)).toEqual('Nasdaq-OMX')
  })

  it('should return correct name for 9880-9889', () => {
    expect(bankName(9880)).toEqual('Riksgälden')
    expect(bankName(9889)).toEqual('Riksgälden')
  })

  it('should return correct name for 9950', () => {
    expect(bankName(9950)).toEqual('Nykredit')
  })

  it('should return correct name for 9951', () => {
    expect(bankName(9951)).toEqual('Teller Branch Norway')
  })

  it('should return correct name for 9952', () => {
    expect(bankName(9952)).toEqual('Bankernas Automatbolag')
  })

  it('should return correct name for 9953', () => {
    expect(bankName(9953)).toEqual('Teller Branch Sweden')
  })

  it('should return correct name for 9954', () => {
    expect(bankName(9954)).toEqual('Kortaccept Nordic')
  })

  it('should return correct name for special Swedbank 8327-9', () => {
    expect(bankName('8327-9')).toEqual('Swedbank')
  })

  it('should return correct name for range 9960-9969', () => {
    expect(bankName(9961)).toEqual('Nordea')
  })

  it('should return empty if all are undefined', () => {
    expect(bankName(52)).toEqual('')
  })
})

describe('#clearingNumbers', () => {
  it('should return clearing numbers of a provided bank name', () => {
    expect(clearingNumbers('SEB')).toEqual([
      {
        min: 5000,
        max: 5999
      },
      {
        min: 9120,
        max: 9124
      },
      {
        min: 9130,
        max: 9149
      }
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
