import { ApolloClient, createNetworkInterface } from 'react-apollo'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) { global.fetch = require('isomorphic-fetch') }

let apolloClient: ApolloClient | null = null

function create(): ApolloClient {
  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      opts: {
        // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin',
      },
    }),
  })
}

export function initApollo(): ApolloClient {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create()
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create()
  }

  return apolloClient
}
