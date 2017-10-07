import { ApolloClient, getDataFromTree, ApolloProvider } from 'react-apollo'
import { Store } from 'redux'
import { path, compose } from 'ramda'

import { assertType } from 'ramda-asserters'

export async function loadApolloData<S>(
  content: JSX.Element,
  apollo: ApolloClient,
  redux: Store<S>
): Promise<object> {
  // Run all GraphQL queries with sideeffect
  await getDataFromTree(
    // No need to use the Redux Provider
    // because Apollo sets up the store for us
    <ApolloProvider client={apollo} store={redux}>
      {content}
    </ApolloProvider>
  )

  const state = redux.getState()
  const data = compose(assertType('Object'), path(['apollo', 'data']))(state)

  return data
}
