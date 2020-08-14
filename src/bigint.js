'use strict'

console.log(Number.MAX_SAFE_INTEGER) // `9007199254740991`, 16 digits.
const numberOne = 12345678901234567 // 17 digits.
console.log(numberOne) // `12345678901234568`, the last digit is wrong, so it's not "safe" to use it.

const bigIntOne = BigInt('12345678901234567')
const bigIntTwo = 12345678901234567n // Note the `n` at the end of the value.
console.log(typeof bigIntOne) // bigint.
console.log(bigIntOne === bigIntTwo) // true.

const bigIntThree = BigInt(3)
const numberThree = 3
console.log(bigIntThree === numberThree) // false.
/* eslint-disable eqeqeq */
// noinspection EqualityComparisonWithCoercionJS
console.log(bigIntThree == numberThree) // true.
/* eslint-enable */
console.log(bigIntThree >= numberThree) // true.
// console.log(bigIntThree + numberThree) // TypeError.
