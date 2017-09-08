import {
  createStore,
  applyMiddleware,
  Store,
  Reducer,
  combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ApolloClient } from 'react-apollo'
import { reducers, RootState } from '~/modules'

type RootStateWithApollo = RootState & { apollo: object }
type ReduxStore = Store<RootStateWithApollo | {}>
type RootReducer = Reducer<RootStateWithApollo>
export type InitialState = object

let reduxStore: ReduxStore | null = null

function create(apollo: ApolloClient, initialState: InitialState): ReduxStore {
  const rootReducer: RootReducer = combineReducers({
    ...reducers,
    apollo: apollo.reducer(),
  })
  const middlewares = [apollo.middleware()]

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}

export function initRedux(
  apollo: ApolloClient,
  initialState: InitialState = {}
): ReduxStore {
  if (!process.browser) {
    return create(apollo, initialState)
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState)
  }

  return reduxStore
}
