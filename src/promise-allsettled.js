'use strict'

const promisesAllResolved = [
  new Promise(resolve => resolve('Promise One resolved.')),
  new Promise(resolve => resolve('Promise Two resolved.')),
  new Promise(resolve => resolve('Promise Three resolved.')),
]

const promisesWithRejection = [
  new Promise(resolve => resolve('Promise One resolved.')),
  new Promise((resolve, reject) => reject(new Error('Promise Two rejected!'))),
  new Promise(resolve => resolve('Promise Three resolved.')),
]

Promise.all(promisesAllResolved).then(() => {
  console.log('`promisesAllResolved` have been resolved.')
})

Promise.all(promisesWithRejection).then(() => {
  console.log('`promisesWithRejection` have been resolved.') // This won't be reached.
}).catch(error => console.log(`\`promisesWithRejection\` ${error.name}: ${error.message}`))

// Note: A "settled" `Promise` means it has either been resolved or rejected.
Promise.allSettled(promisesAllResolved).then(() => {
  console.log('`promisesAllResolved` have been settled.')
})

// Note: A "settled" `Promise` means it has either been resolved or rejected.
Promise.allSettled(promisesWithRejection).then(() => {
  console.log('`promisesWithRejection` have been settled.')
})
