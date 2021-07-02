'use strict'

const object = {
  a1: {
    a2: {
      a3: 'okay',
    },
  },
  b1: {
    b2: null,
  },
}

console.log(object.a1.a2.a3) // okay.
// console.log(object.b1.b2.b3) // TypeError.
// console.log(object.c1.c2) // TypeError.

console.log(object.a1?.a2?.a3) // okay.
console.log(object.b1.b2?.b3) // undefined.
console.log(object.c1?.c2) // undefined.
console.log(object.nonExistingMethod?.()) // undefined.

// console.log(nonExistingObject?.test) // ReferenceError.
