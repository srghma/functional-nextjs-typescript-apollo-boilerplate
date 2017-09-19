// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  // tslint:disable-next-line:no-object-mutation
  global.fetch = require('isomorphic-fetch')
}
