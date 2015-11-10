var chai = require('chai');
var expect = chai.expect;

describe('#bank', function () {
  var bank;

  beforeEach(function () {
    bank = require('../').bankName;
  });

  it('should return correct name for range 1100-1199', function () {
    expect(bank(1150)).to.eql('Nordea');
  });

  it('should return correct name for range 1200-1399', function () {
    expect(bank(1205)).to.eql('Danske Bank');
  });

  it('should return correct name for range 1400-2099', function () {
    expect(bank(1999)).to.eql('Nordea');
  });

  it('should return correct name for range 2300-2309', function () {
    expect(bank(2301)).to.eql('JP Nordiska');
  });

  it('should return correct name for 2310', function () {
    expect(bank(2310)).to.eql('Ålandsbanken');
  });

  it('should return correct name for range 2311-2399', function () {
    expect(bank(2350)).to.eql('JP Nordiska');
  });

  it('should return correct name for range 2400-2499', function () {
    expect(bank(2485)).to.eql('Danske Bank');
  });

  it('should return correct name for 2950', function () {
    expect(bank(2950)).to.eql('Sambox');
  });

  it('should return correct name for range 3000-3299', function () {
    expect(bank(3158)).to.eql('Nordea');
  });

  it('should return correct name for 3300', function () {
    expect(bank(3300)).to.eql('Nordea Personkonto');
  });

  it('should return correct name for range 3301-3399', function () {
    expect(bank(3301)).to.eql('Nordea');
  });

  it('should return correct name for range 3400-3409', function () {
    expect(bank(3405)).to.eql('Länsförsäkringar Bank');
  });

  it('should return correct name for range 3410-3781', function () {
    expect(bank(3520)).to.eql('Nordea');
  });

  it('should return correct name for 3782', function () {
    expect(bank(3782)).to.eql('Nordea Personkonto');
  });

  it('should return correct name for range 3783-4999', function () {
    expect(bank(4520)).to.eql('Nordea');
  });

  it('should return correct name for range 5000-5999', function () {
    expect(bank(5202)).to.eql('SEB');
  });

  it('should return correct name for range 6000-6999', function () {
    expect(bank(6187)).to.eql('Handelsbanken');
  });

  it('should return correct name for range 7000-7120', function () {
    expect(bank(7059)).to.eql('Swedbank');
  });

  it('should return correct name for range 7121-7122', function () {
    expect(bank(7121)).to.eql('Sparbanken i Enköping');
  });

  it('should return correct name for range 7123-8104', function () {
    expect(bank(8054)).to.eql('Swedbank');
  });

  it('should return correct name for 7980', function () {
    expect(bank(7980)).to.eql('Swedbank');
  });

  it('should return correct name for 8079-6', function () {
    expect(bank('8079-6')).to.eql('Färs & Frosta Sparbank');
  });

  it('should return correct name for 8105', function () {
    expect(bank(8105)).to.eql('Swedbank');
  });

  it('should return correct name for range 8106-8999', function () {
    expect(bank(8564)).to.eql('Swedbank');
  });

  it('should return correct name for 8257', function () {
    expect(bank(8257)).to.eql('Sörmlands Sparbank');
  });

  it('should return correct name for 8264', function () {
    expect(bank(8264)).to.eql('Sparbanken Nord');
  });

  it('should return correct name for 8284', function () {
    expect(bank(8284)).to.eql('Sala Sparbank');
  });

  it('should return correct name for 8304-8', function () {
    expect(bank('8304-8')).to.eql('Sparbanken Alingsås');
  });

  it('should return correct name for 8305-5', function () {
    expect(bank('8305-5')).to.eql('Sparbanken i Enköping');
  });

  it('should return correct name for 8313-9', function () {
    expect(bank('8313-9')).to.eql('Sparbanken 1826');
  });

  it('should return correct name for 8383-2', function () {
    expect(bank('8383-2')).to.eql('Vadstena Sparbank');
  });

  it('should return correct name for 8393-1', function () {
    expect(bank('8393-1')).to.eql('Lönneberga-Tuna-Vena Sparbank');
  });

  it('should return correct name for 8431-9', function () {
    expect(bank('8431-9')).to.eql('Westra Wermlands Sparbank');
  });

  it('should return correct name for range 9020-9029', function () {
    expect(bank(9025)).to.eql('Länsförsäkringar Bank');
  });

  it('should return correct name for range 9040-9049', function () {
    expect(bank(9047)).to.eql('Citibank');
  });

  it('should return correct name for range 9050-9059', function () {
    expect(bank(9058)).to.eql('HSB Bank');
  });

  it('should return correct name for range 9060-9069', function () {
    expect(bank(9061)).to.eql('Länsförsäkringar Bank');
  });

  it('should return correct name for 9080', function () {
    expect(bank(9080)).to.eql('Calyon Bank');
  });

  it('should return correct name for range 9090-9099', function () {
    expect(bank(9091)).to.eql('ABN AMRO');
  });

  it('should return correct name for 9100', function () {
    expect(bank(9100)).to.eql('Nordnet Bank');
  });

  it('should return correct name for range 9120-9124', function () {
    expect(bank(9121)).to.eql('SEB');
  });

  it('should return correct name for range 9130-9149', function () {
    expect(bank(9135)).to.eql('SEB');
  });

  it('should return correct name for range 9150-9169', function () {
    expect(bank(9155)).to.eql('Skandiabanken');
  });

  it('should return correct name for range 9170-9179', function () {
    expect(bank(9175)).to.eql('Ikano Bank');
  });

  it('should return correct name for range 9190-9199', function () {
    expect(bank(9195)).to.eql('Den Norske Bank');
  });

  it('should return correct name for range 9200-9209', function () {
    expect(bank(9205)).to.eql('Stadshypotek Bank');
  });

  it('should return correct name for range 9230', function () {
    expect(bank(9230)).to.eql('Bank2');
  });

  it('should return correct name for range 9231-9239', function () {
    expect(bank(9235)).to.eql('SalusAnsvar Bank');
  });

  it('should return correct name for range 9260-9269', function () {
    expect(bank(9268)).to.eql('Gjensidige NOR Sparebank');
  });

  it('should return correct name for range 9270-9279', function () {
    expect(bank(9278)).to.eql('ICA Banken');
  });

  it('should return correct name for range 9280-9289', function () {
    expect(bank(9282)).to.eql('Resurs Bank');
  });

  it('should return correct name for range 9290-9299', function () {
    expect(bank(9293)).to.eql('Coop Bank');
  });

  it('should return correct name for 9300', function () {
    expect(bank(9300)).to.eql('Sparbanken Öresund');
  });

  it('should return correct name for range 9400-9449', function () {
    expect(bank(9435)).to.eql('Forex Bank');
  });

  it('should return correct name for 9460', function () {
    expect(bank(9460)).to.eql('GE Money Bank');
  });

  it('should return correct name for 9469', function () {
    expect(bank(9469)).to.eql('GE Money Bank');
  });

  it('should return correct name for range 9500-9547', function () {
    expect(bank(9543)).to.eql('Plusgirot Bank');
  });

  it('should return correct name for 9548', function () {
    expect(bank(9548)).to.eql('Ekobanken');
  });

  it('should return correct name for 9549', function () {
    expect(bank(9549)).to.eql('JAK Medlemsbank');
  });

  it('should return correct name for 9550', function () {
    expect(bank(9550)).to.eql('Avanza Bank');
  });

  it('should return correct name for 9559', function () {
    expect(bank(9559)).to.eql('Avanza Bank');
  });

  it('should return correct name for range 9960-9969', function () {
    expect(bank(9961)).to.eql('Plusgirot Bank');
  });

  it('should return empty if all are undefined', () => {
    expect(bank(52)).to.eql('');
  });
});

describe('#clearingNumbers', function () {
  var clearingNumbers;

  beforeEach(function () {
    clearingNumbers = require('../').clearingNumbers;
  });

  it('should return clearing numbers of a provided bank name', function () {
    expect(clearingNumbers('SEB'))
      .to.eql([
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
      ]);
  });
});
