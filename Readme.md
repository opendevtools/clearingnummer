## Clearingnummer

Clearing numbers, _clearingnummer_ in Swedish, are four or five digit identifiers for Swedish banks. This package helps you find the bank related to a specific number. All clearing numbers are taken from [Wikipedia](http://www.wikiwand.com/sv/Lista_%C3%B6ver_clearingnummer_till_svenska_banker).

### Installation
```
npm install clearingnummer --save
```

### Services

#### bankName
```
var clearingnummer = require('clearingnummer');

clearingnummer.bankName(5202);
// 'SEB'
```

#### clearingNumbers
```
var clearingnummer = require('clearingnummer');

clearingnummer.clearingNumbers('Ålandsbanken');
// [{
     "min": 2310,
     "max": 2310
   }]
```

### Tests
```
npm test
```
