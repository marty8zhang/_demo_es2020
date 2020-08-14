'use strict'

const dates = '2018-04-30 2020-08-14'
// Note: The `g` (global) flag is needed for `match()` and `matchAll()` to match more than one occurrences.
const regexDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

/*
Outputs:
2018-04-30
2020-08-14
 */
for (const date of dates.match(regexDate)) {
  console.log(date)
}

/*
`String.matchAll()` is a nice alternative to using `RegExp.exec()` in a while loop with the `g` flag enabled.
Outputs:
[
  '2018-04-30',
  '2018',
  '04',
  '30',
  index: 0,
  input: '2018-04-30 2020-08-14',
  groups: [Object: null prototype] { year: '2018', month: '04', day: '30' }
]
[
  '2020-08-14',
  '2020',
  '08',
  '14',
  index: 11,
  input: '2018-04-30 2020-08-14',
  groups: [Object: null prototype] { year: '2020', month: '08', day: '14' }
]
 */
const matchAllResult = []
for (const date of dates.matchAll(regexDate)) {
  matchAllResult.push(date)
  console.log(date)
}

// The outputs are the same as the above use of `String.matchAll()`.
// Note: `RegExp.exec()` always matches only one occurrence. The `g` flag has no effect to it.
const execResult = []
let date = regexDate.exec(dates)
while (date !== null) {
  execResult.push(date)
  console.log(date)

  date = regexDate.exec(dates)
}

console.log(JSON.stringify(matchAllResult) === JSON.stringify(execResult)) // true.
