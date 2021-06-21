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
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://willcodefor.beer/"><img src="https://avatars1.githubusercontent.com/u/1478102?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rickard Laurin</b></sub></a><br /><a href="https://github.com/opendevtools/clearingnummer/issues?q=author%3Abeliever" title="Bug reports">🐛</a> <a href="https://github.com/opendevtools/clearingnummer/commits?author=believer" title="Code">💻</a> <a href="https://github.com/opendevtools/clearingnummer/commits?author=believer" title="Documentation">📖</a> <a href="https://github.com/opendevtools/clearingnummer/pulls?q=is%3Apr+reviewed-by%3Abeliever" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://fredrikohlin.com/"><img src="https://avatars3.githubusercontent.com/u/80429?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fredrik Ohlin</b></sub></a><br /><a href="https://github.com/opendevtools/clearingnummer/commits?author=fohlin" title="Code">💻</a></td>
    <td align="center"><a href="http://www.atomia.com"><img src="https://avatars3.githubusercontent.com/u/1167428?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ivan Kustera</b></sub></a><br /><a href="https://github.com/opendevtools/clearingnummer/commits?author=ivankustera" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ben-mckernan"><img src="https://avatars.githubusercontent.com/u/4847190?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben McKernan</b></sub></a><br /><a href="https://github.com/opendevtools/clearingnummer/commits?author=ben-mckernan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mp-horm"><img src="https://avatars.githubusercontent.com/u/85336596?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mp-horm</b></sub></a><br /><a href="https://github.com/opendevtools/clearingnummer/commits?author=mp-horm" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
