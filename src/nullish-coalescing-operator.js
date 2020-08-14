'use strict'

const nullValue = null
const zeroValue = 0
const emptyValue = ''
const falseValue = false

console.log(nullValue ?? 'default value') // default value.
console.log(zeroValue ?? 'default value') // 0.
console.log(emptyValue ?? 'default value') // ''.
console.log(falseValue ?? 'default value') // false.
console.log(undefined ?? 'default value') // `default value`, even though `undefined !== null`.
