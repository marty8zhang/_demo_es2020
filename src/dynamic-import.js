'use strict'

import { testDynamicImport } from './_dynamic-import'

testDynamicImport('static `import`')

/*
 * Dynamic `import()` results in a `Promise` resolving with the content exported by the loaded module.
 * Notes:
 *   - `import()` supports both relative and absolute paths.
 *   - A relative path must start with `./`.
 *   - The file suffix, such as `.js`, isn't necessary.
 */
// Example use #1:
import('./_dynamic-import').then((module) => {
  module.testDynamicImport('`import().then()`')
}).catch(error => console.log(error.name + ': ' + error.message))

// Example use #2:
async function test () {
  const module = await import('./_dynamic-import')

  module.testDynamicImport('inside `async ()`')
}

test()
