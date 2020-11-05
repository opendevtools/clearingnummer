## Clearingnummer

[![](https://github.com/opendevtools/clearingnummer/workflows/Release/badge.svg)](https://github.com/opendevtools/clearingnummer/actions?workflow=Release)
[![npm (scoped)](https://img.shields.io/npm/v/@opendevtools/clearingnummer)](https://npm.im/@opendevtools/clearingnummer)

Sort codes, _clearingnummer_ in Swedish, are four or five digit identifiers for Swedish banks. This package helps you find the bank related to a specific number. All clearing numbers are taken from [Wikipedia](http://www.wikiwand.com/sv/Lista_%C3%B6ver_clearingnummer_till_svenska_banker) and [Swedish Bankers Association](http://www.swedishbankers.se/media/3535/1710_clearingnummer-institut.pdf).

### Installation

```
npm install @opendevtools/clearingnummer
```

### Services

#### bankName()

```js
bankName(string | number): string
```

Retrieve bank name for a given number

##### Example

```js
import clearingnummer from '@opendevtools/clearingnummer'

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
import clearingnummer from '@opendevtools/clearingnummer'

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
import clearingnummer from '@opendevtools/clearingnummer'

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
| [<img src="https://avatars1.githubusercontent.com/u/1478102?v=4" width="100px;"/><br /><sub><b>Rickard Laurin</b></sub>](http://willcodefor.beer/)<br />[🐛](https://github.com/opendevtools/clearingnummer/issues?q=author%3Abeliever "Bug reports") [💻](https://github.com/opendevtools/clearingnummer/commits?author=believer "Code") [📖](https://github.com/opendevtools/clearingnummer/commits?author=believer "Documentation") [👀](#review-believer "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/80429?v=4" width="100px;"/><br /><sub><b>Fredrik Ohlin</b></sub>](https://fredrikohlin.com/)<br />[💻](https://github.com/opendevtools/clearingnummer/commits?author=fohlin "Code") | [<img src="https://avatars3.githubusercontent.com/u/1167428?v=4" width="100px;"/><br /><sub><b>Ivan Kustera</b></sub>](http://www.atomia.com)<br />[💻](https://github.com/opendevtools/clearingnummer/commits?author=ivankustera "Code") |
| :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
