import {
  ApolloClient,
  createNetworkInterface,
  MiddlewareInterface,
} from 'react-apollo'
import { once } from 'ramda'

import '../utils/fetch-polyfill'

const loggerMiddleware: MiddlewareInterface = {
  applyMiddleware(req, next) {
    console.log('')
    next()
  },
}

function create(): ApolloClient {
  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    opts: {
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
    },
  })

  networkInterface.use([loggerMiddleware])

  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface,
  })
}

// Make sure to create a new client for every server-side request so that data
// isn't shared between connections (which would be bad)
export const initApollo: typeof create = process.browser ? create : once(create)
