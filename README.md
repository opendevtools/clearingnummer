## Clearingnummer

[![npm version](https://badge.fury.io/js/clearingnummer.svg)](https://badge.fury.io/js/clearingnummer)
[![Build Status](https://travis-ci.org/believer/clearingnummer.svg?branch=master)](https://travis-ci.org/believer/clearingnummer)
[![Code Climate](https://codeclimate.com/github/believer/clearingnummer/badges/gpa.svg)](https://codeclimate.com/github/believer/clearingnummer)
[![Test Coverage](https://codeclimate.com/github/believer/clearingnummer/badges/coverage.svg)](https://codeclimate.com/github/believer/clearingnummer/coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/believer/clearingnummer/badge.svg)](https://snyk.io/test/github/believer/clearingnummer)

Sort codes, _clearingnummer_ in Swedish, are four or five digit identifiers for Swedish banks. This package helps you find the bank related to a specific number. All clearing numbers are taken from [Wikipedia](http://www.wikiwand.com/sv/Lista_%C3%B6ver_clearingnummer_till_svenska_banker) and [Swedish Bankers Association](http://www.swedishbankers.se/media/3535/1710_clearingnummer-institut.pdf).

### Installation
```
yarn add clearingnummer
```

### Services

#### bankName()
```js
bankName(string | number): string
```

Retrieve bank name for a given number

##### Example
```js
import clearingnummer from 'clearingnummer'

clearingnummer.bankName(5202)
// 'SEB'
```

#### clearingNumbers()
```js
clearingNumbers(string): { min: string | number, max: string | number }[]
```

Retrieve clearing numbers for a given bank name

##### Example
```js
import clearingnummer from 'clearingnummer'

clearingnummer.clearingNumbers('Ålandsbanken')
// [{
     "min": 2310,
     "max": 2310
   }]
```

#### allBanks
```js
allBanks(): string[]
```

Retrieve the names of all banks in the listing

```js
import clearingnummer from 'clearingnummer'

clearingnummer.allBanks()
// [
  'ABN AMRO',
  'Avanza Bank'
  ...
]
```

### Tests
```
npm test
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1478102?v=4" width="100px;"/><br /><sub><b>Rickard Laurin</b></sub>](http://willcodefor.beer/)<br />[🐛](https://github.com/believer/clearingnummer/issues?q=author%3Abeliever "Bug reports") [💻](https://github.com/believer/clearingnummer/commits?author=believer "Code") [📖](https://github.com/believer/clearingnummer/commits?author=believer "Documentation") [👀](#review-believer "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/80429?v=4" width="100px;"/><br /><sub><b>Fredrik Ohlin</b></sub>](https://fredrikohlin.com/)<br />[💻](https://github.com/believer/clearingnummer/commits?author=fohlin "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!