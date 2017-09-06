import { ApolloClient, getDataFromTree, ApolloProvider } from 'react-apollo'
import { Store } from 'redux'
import { path } from 'ramda'

import { invariant } from '~/utils'

export async function loadApolloData<S>(
  content: JSX.Element,
  apollo: ApolloClient,
  redux: Store<S>
): Promise<object> {
  try {
    // Run all GraphQL queries
    await getDataFromTree(
      // No need to use the Redux Provider
      // because Apollo sets up the store for us
      <ApolloProvider client={apollo} store={redux}>
        {content}
      </ApolloProvider>
    )
  } catch (error) {
    // Prevent Apollo Client GraphQL errors from crashing SSR.
    // Handle them in components via the data.error prop:
    // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
  }

  const state = redux.getState()
  const data = path(['apollo', 'data'], state)
  invariant(typeof data === 'object', 'apollo store must be object', {
    state: state,
  })
  return data
}
