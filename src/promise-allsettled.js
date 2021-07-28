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
Promise.allSettled(promisesWithRejection).then((results) => {
  console.log('`promisesWithRejection` have been settled.')
  /*
   * Output:
      [
        { status: 'fulfilled', value: 'Promise One resolved.' },
        {
          status: 'rejected',
          reason: Error: Promise Two rejected!
              {error stack...}
        },
        { status: 'fulfilled', value: 'Promise Three resolved.' }
      ]
   */
  console.log(results)

  const successfulResults = results.filter(
    (result) => result.status === 'fulfilled',
  )
    .map((result) => result.value)
  // Output: [ 'Promise One resolved.', 'Promise Three resolved.' ].
  console.log(successfulResults)
})
