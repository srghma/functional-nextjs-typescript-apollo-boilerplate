import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ApolloClient } from 'react-apollo'

import { getReducer, RootState } from './getReducer'

export type ReduxStore = Store<RootState | {}>
export type InitialState = object
let reduxStore: ReduxStore | null = null

function create(apollo: ApolloClient, initialState?: InitialState): ReduxStore {
  const middlewares = [apollo.middleware()]

  const store = createStore(
    getReducer(apollo),
    initialState || {},
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}

export function initRedux(
  apollo: ApolloClient,
  initialState?: InitialState
): ReduxStore {
  if (!process.browser) {
    return create(apollo)
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState)
  }

  return reduxStore
}
