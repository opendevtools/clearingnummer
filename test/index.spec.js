var chai = require('chai')
var expect = chai.expect

describe('#bank', function() {
  var bank

  beforeEach(function() {
    bank = require('../').bankName
  })

  it('returns correct bank for range 1000-1099', function() {
    expect(bank(1000)).to.eql('Sveriges riksbank')
    expect(bank(1050)).to.eql('Sveriges riksbank')
    expect(bank(1099)).to.eql('Sveriges riksbank')
  })

  it('should return correct name for range 1100-1199', function() {
    expect(bank(1100)).to.eql('Nordea')
    expect(bank(1150)).to.eql('Nordea')
    expect(bank(1199)).to.eql('Nordea')
  })

  it('should return correct name for range 1200-1399', function() {
    expect(bank(1205)).to.eql('Danske Bank')
  })

  it('should return correct name for range 1400-2099', function() {
    expect(bank(1400)).to.eql('Nordea')
    expect(bank(1999)).to.eql('Nordea')
    expect(bank(2099)).to.eql('Nordea')
  })

  it('should return correct name for 2310', function() {
    expect(bank(2300)).to.eql('Ålandsbanken')
    expect(bank(2310)).to.eql('Ålandsbanken')
    expect(bank(2399)).to.eql('Ålandsbanken')
  })

  it('should return correct name for range 2400-2499', function() {
    expect(bank(2400)).to.eql('Danske Bank')
    expect(bank(2485)).to.eql('Danske Bank')
    expect(bank(2499)).to.eql('Danske Bank')
  })

  it('should return correct name for 2950', function() {
    expect(bank(2950)).to.eql('Sambox')
  })

  it('should return correct name for range 3000-3299', function() {
    expect(bank(3000)).to.eql('Nordea')
    expect(bank(3158)).to.eql('Nordea')
    expect(bank(3299)).to.eql('Nordea')
  })

  it('should return correct name for 3300', function() {
    expect(bank(3300)).to.eql('Nordea Personkonto')
  })

  it('should return correct name for range 3301-3399', function() {
    expect(bank(3301)).to.eql('Nordea')
    expect(bank(3350)).to.eql('Nordea')
    expect(bank(3399)).to.eql('Nordea')
  })

  it('should return correct name for range 3400-3409', function() {
    expect(bank(3400)).to.eql('Länsförsäkringar Bank')
    expect(bank(3405)).to.eql('Länsförsäkringar Bank')
    expect(bank(3409)).to.eql('Länsförsäkringar Bank')
  })

  it('should return correct name for range 3410-3781', function() {
    expect(bank(3410)).to.eql('Nordea')
    expect(bank(3520)).to.eql('Nordea')
    expect(bank(3781)).to.eql('Nordea')
  })

  it('should return correct name for 3782', function() {
    expect(bank(3782)).to.eql('Nordea Personkonto')
  })

  it('should return correct name for range 3783-4999', function() {
    expect(bank(3783)).to.eql('Nordea')
    expect(bank(4520)).to.eql('Nordea')
    expect(bank(4999)).to.eql('Nordea')
  })

  it('should return correct name for range 5000-5999', function() {
    expect(bank(5000)).to.eql('SEB')
    expect(bank(5202)).to.eql('SEB')
    expect(bank(5999)).to.eql('SEB')
  })

  it('should return correct name for range 6000-6999', function() {
    expect(bank(6000)).to.eql('Handelsbanken')
    expect(bank(6187)).to.eql('Handelsbanken')
    expect(bank(6999)).to.eql('Handelsbanken')
  })

  it('should return correct name for range 7000-7120', function() {
    expect(bank(7000)).to.eql('Swedbank')
    expect(bank(7059)).to.eql('Swedbank')
    expect(bank(7120)).to.eql('Swedbank')
  })

  it('should return correct name for range 7121-7122', function() {
    expect(bank(7121)).to.eql('Sparbanken i Enköping')
  })

  it('should return correct name for range 7123-8104', function() {
    expect(bank(7123)).to.eql('Swedbank')
    expect(bank(8054)).to.eql('Swedbank')
    expect(bank(8104)).to.eql('Swedbank')
  })

  it('should return correct name for 7980', function() {
    expect(bank(7980)).to.eql('Swedbank')
  })

  it('should return correct name for 8079-6', function() {
    expect(bank('8079-6')).to.eql('Färs & Frosta Sparbank')
  })

  it('should return correct name for 8105', function() {
    expect(bank(8105)).to.eql('Swedbank')
  })

  it('should return correct name for range 8106-8999', function() {
    expect(bank(8564)).to.eql('Swedbank')
  })

  it('should return correct name for 8257', function() {
    expect(bank(8257)).to.eql('Swedbank')
  })

  it('should return correct name for 8264', function() {
    expect(bank(8264)).to.eql('Sparbanken Nord')
  })

  it('should return correct name for 8284', function() {
    expect(bank(8284)).to.eql('Sala Sparbank')
  })

  it('should return correct name for 8304-8', function() {
    expect(bank('8304-8')).to.eql('Sparbanken Alingsås')
  })

  it('should return correct name for 8305-5', function() {
    expect(bank('8305-5')).to.eql('Sparbanken i Enköping')
  })

  it('should return correct name for 8313-9', function() {
    expect(bank('8313-9')).to.eql('Sparbanken 1826')
  })

  it('should return correct name for 8383-2', function() {
    expect(bank('8383-2')).to.eql('Swedbank')
  })

  it('should return correct name for 8393-1', function() {
    expect(bank('8393-1')).to.eql('Lönneberga-Tuna-Vena Sparbank')
  })

  it('should return correct name for 8055-6', function() {
    expect(bank('8055-6')).to.eql('Sparbanken Gotland')
  })

  it('should return correct name for 8060-6', function() {
    expect(bank('8060-6')).to.eql('Falkenbergs sparbank')
  })

  it('should return correct name for 8158-8', function() {
    expect(bank('8158-8')).to.eql('Kinda-Ydre sparbank')
  })

  it('should return correct name for 8164-6', function() {
    expect(bank('8164-6')).to.eql('Lekebergs sparbank')
  })

  it('should return correct name for 8217-2', function() {
    expect(bank('8217-2')).to.eql('Markaryds sparbank')
  })

  it('should return correct name for 8250-3', function() {
    expect(bank('8250-3')).to.eql('Närs sparbank')
  })

  it('should return correct name for 8289-1', function() {
    expect(bank('8289-1')).to.eql('Sparbanken Skaraborg')
  })

  it('should return correct name for 8295-8', function() {
    expect(bank('8295-8')).to.eql('Skurups sparbank')
  })

  it('should return correct name for 8304-8', function() {
    expect(bank('8304-8')).to.eql('Sparbanken Alingsås')
  })

  it('should return correct name for 8305-5', function() {
    expect(bank('8305-5')).to.eql('Sparbanken i Enköping')
  })

  it('should return correct name for 8314-7', function() {
    expect(bank('8314-7')).to.eql('Sparbanken Lidköping')
  })

  it('should return correct name for 8331-1', function() {
    expect(bank('8331-1')).to.eql('Häradssparbanken Mönsterås')
  })

  it('should return correct name for 8336-0', function() {
    expect(bank('8336-0')).to.eql('Fryksdalens sparbank')
  })

  it('should return correct name for 8321-2', function() {
    expect(bank('8321-2')).to.eql('Sölvesborg-Mjällby sparbank')
  })

  it('should return correct name for 8431-9', function() {
    expect(bank('8431-9')).to.eql('Swedbank')
  })

  it('should return correct name for range 9020-9029', function() {
    expect(bank(9020)).to.eql('Länsförsäkringar Bank')
    expect(bank(9025)).to.eql('Länsförsäkringar Bank')
    expect(bank(9029)).to.eql('Länsförsäkringar Bank')
  })

  it('should return correct name for range 9040-9049', function() {
    expect(bank(9040)).to.eql('Citibank')
    expect(bank(9047)).to.eql('Citibank')
    expect(bank(9049)).to.eql('Citibank')
  })

  it('should return correct name for range 9060-9069', function() {
    expect(bank(9061)).to.eql('Länsförsäkringar Bank')
  })

  it('should return correct name for 9080-9089', function() {
    expect(bank(9080)).to.eql('Calyon Bank')
    expect(bank(9089)).to.eql('Calyon Bank')
  })

  it('should return correct name for range 9090-9099', function() {
    expect(bank(9090)).to.eql('Royal Bank of Scotland')
    expect(bank(9091)).to.eql('Royal Bank of Scotland')
    expect(bank(9099)).to.eql('Royal Bank of Scotland')
  })

  it('should return correct name for 9100-9109', function() {
    expect(bank(9100)).to.eql('Nordnet Bank')
    expect(bank(9109)).to.eql('Nordnet Bank')
  })

  it('should return correct name for range 9120-9124', function() {
    expect(bank(9121)).to.eql('SEB')
  })

  it('should return correct name for range 9130-9149', function() {
    expect(bank(9135)).to.eql('SEB')
  })

  it('should return correct name for range 9150-9169', function() {
    expect(bank(9155)).to.eql('Skandiabanken')
  })

  it('should return correct name for range 9170-9179', function() {
    expect(bank(9175)).to.eql('Ikano Bank')
  })

  it('should return correct name for range 9180-9189', function() {
    expect(bank(9180)).to.eql('Danske Bank')
    expect(bank(9189)).to.eql('Danske Bank')
  })

  it('should return correct name for range 9190-9199', function() {
    expect(bank(9190)).to.eql('Den Norske Bank')
    expect(bank(9195)).to.eql('Den Norske Bank')
    expect(bank(9199)).to.eql('Den Norske Bank')
  })

  it('should return correct name for range 9230-9239', function() {
    expect(bank(9230)).to.eql('Marginalen Bank')
    expect(bank(9239)).to.eql('Marginalen Bank')
  })

  it('should return correct name for range 9250-9259', function() {
    expect(bank(9250)).to.eql('SBAB Bank')
    expect(bank(9259)).to.eql('SBAB Bank')
  })

  it('should return correct name for range 9260-9269', function() {
    expect(bank(9268)).to.eql('Den Norske Bank')
  })

  it('should return correct name for range 9270-9279', function() {
    expect(bank(9278)).to.eql('ICA Banken')
  })

  it('should return correct name for range 9280-9289', function() {
    expect(bank(9282)).to.eql('Resurs Bank')
  })

  it('should return correct name for 9300-9349', function() {
    expect(bank(9300)).to.eql('Swedbank')
    expect(bank(9349)).to.eql('Swedbank')
  })

  it('returns correct name for range 9380-9389', function() {
    expect(bank(9380)).to.eql('Pareto Öhman')
    expect(bank(9389)).to.eql('Pareto Öhman')
  })

  it('returns correct name for range 9390-9399', function() {
    expect(bank(9390)).to.eql('Landshypotek Bank')
    expect(bank(9399)).to.eql('Landshypotek Bank')
  })

  it('should return correct name for range 9400-9449', function() {
    expect(bank(9435)).to.eql('Forex Bank')
  })

  it('should return correct name for 9460-9469', function() {
    expect(bank(9460)).to.eql('Santander Consumer Bank')
    expect(bank(9469)).to.eql('Santander Consumer Bank')
  })

  it('should return correct name for 9470-9479', function() {
    expect(bank(9470)).to.eql('Fortis Bank')
    expect(bank(9479)).to.eql('Fortis Bank')
  })

  it('should return correct name for 9480-9489', function() {
    expect(bank(9480)).to.eql('Parex Bank')
    expect(bank(9489)).to.eql('Parex Bank')
  })

  it('should return correct name for range 9500-9549', function() {
    expect(bank(9500)).to.eql('Nordea')
    expect(bank(9543)).to.eql('Nordea')
    expect(bank(9549)).to.eql('Nordea')
  })

  it('should return correct name for 9550-9569', function() {
    expect(bank(9550)).to.eql('Avanza Bank')
    expect(bank(9559)).to.eql('Avanza Bank')
  })

  it('should return correct name for range 9570-9579', function() {
    expect(bank(9570)).to.eql('Sparbanken Syd')
    expect(bank(9579)).to.eql('Sparbanken Syd')
  })

  it('should return correct name for range 9580-9589', function() {
    expect(bank(9580)).to.eql('Exchange Finans Europe')
    expect(bank(9589)).to.eql('Exchange Finans Europe')
  })

  it('should return correct name for range 9590-9599', function() {
    expect(bank(9590)).to.eql('Erik Penser Bankaktiebolag')
    expect(bank(9599)).to.eql('Erik Penser Bankaktiebolag')
  })

  it('should return correct name for range 9610-9619', function() {
    expect(bank(9610)).to.eql('Volvofinans Bank')
    expect(bank(9619)).to.eql('Volvofinans Bank')
  })

  it('should return correct name for range 9620-9629', function() {
    expect(bank(9620)).to.eql('Bank of China (Luxembourg)')
    expect(bank(9629)).to.eql('Bank of China (Luxembourg)')
  })

  it('should return correct name for range 9630-9639', function() {
    expect(bank(9630)).to.eql('Lån & Spar Bank')
    expect(bank(9639)).to.eql('Lån & Spar Bank')
  })

  it('should return correct name for range 9640-9649', function() {
    expect(bank(9640)).to.eql('Nordax Finans')
    expect(bank(9649)).to.eql('Nordax Finans')
  })

  it('should return correct name for range 9650-9659', function() {
    expect(bank(9650)).to.eql('MedMera Bank')
    expect(bank(9659)).to.eql('MedMera Bank')
  })

  it('should return correct name for range 9660-9669', function() {
    expect(bank(9660)).to.eql('Amfa Bank')
    expect(bank(9669)).to.eql('Amfa Bank')
  })

  it('should return correct name for 9670-9679', function() {
    expect(bank(9670)).to.eql('JAK Medlemsbank')
    expect(bank(9679)).to.eql('JAK Medlemsbank')
  })

  it('should return correct name for 9680-9689', function() {
    expect(bank(9680)).to.eql('Bluestep Finans')
    expect(bank(9689)).to.eql('Bluestep Finans')
  })

  it('should return correct name for 9690-9699', function() {
    expect(bank(9690)).to.eql('Folkia')
    expect(bank(9699)).to.eql('Folkia')
  })

  it('should return correct name for 9700-9709', function() {
    expect(bank(9700)).to.eql('Ekobanken')
    expect(bank(9709)).to.eql('Ekobanken')
  })

  it('should return correct name for 9860-9869', function() {
    expect(bank(9860)).to.eql('Privatgirot')
    expect(bank(9869)).to.eql('Privatgirot')
  })

  it('should return correct name for 9870-9879', function() {
    expect(bank(9870)).to.eql('Nasdaq-OMX')
    expect(bank(9879)).to.eql('Nasdaq-OMX')
  })

  it('should return correct name for 9880-9889', function() {
    expect(bank(9880)).to.eql('Riksgälden')
    expect(bank(9889)).to.eql('Riksgälden')
  })

  it('should return correct name for 9950', function() {
    expect(bank(9950)).to.eql('Nykredit')
  })

  it('should return correct name for 9951', function() {
    expect(bank(9951)).to.eql('Teller Branch Norway')
  })

  it('should return correct name for 9952', function() {
    expect(bank(9952)).to.eql('Bankernas Automatbolag')
  })

  it('should return correct name for 9953', function() {
    expect(bank(9953)).to.eql('Teller Branch Sweden')
  })

  it('should return correct name for 9954', function() {
    expect(bank(9954)).to.eql('Kortaccept Nordic')
  })

  it('should return correct name for special Swedbank 8327-9', function() {
    expect(bank('8327-9')).to.eql('Swedbank')
  })

  it('should return correct name for range 9960-9969', function() {
    expect(bank(9961)).to.eql('Nordea')
  })

  it('should return empty if all are undefined', function() {
    expect(bank(52)).to.eql('')
  })
})

describe('#clearingNumbers', function() {
  var clearingNumbers

  beforeEach(function() {
    clearingNumbers = require('../').clearingNumbers
  })

  it('should return clearing numbers of a provided bank name', function() {
    expect(clearingNumbers('SEB')).to.eql([
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

  it('returns an empty array if nothing is found', function() {
    expect(clearingNumbers('NonExistantBank')).to.eql([])
  })
})

describe('#allBanks', function() {
  var allBanks

  beforeEach(function() {
    allBanks = require('../').allBanks
  })

  it('should return a list', function() {
    expect(allBanks().length > 0).to.be.true
  })

  it('should return a list of banks', function() {
    expect(allBanks().includes('SEB')).to.be.true
  })
})
