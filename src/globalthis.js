'use strict'

// Pre-ES2020.
function getGlobalObject () {
  if (typeof self !== 'undefined') {
    console.log('Found `self`!')
    return self
  }

  if (typeof window !== 'undefined') {
    console.log('Found `window`!')
    return window
  }

  if (typeof global !== 'undefined') {
    console.log('Found `global`!') // Will trigger this in Node.js.
    return global
  }

  throw new Error('unable to locate the global object')
}

// ES2020 `globalThis` variable.
console.log(globalThis === getGlobalObject()) // true.
