import { Reducer } from 'redux'
import { combineReducers } from 'redux'
import { ApolloClient } from 'react-apollo'

import { reducers, RootState as RootStateWithoutApollo } from '~/modules'

export interface RootState extends RootStateWithoutApollo {
  apollo?: object
}

export type RootReducer = Reducer<RootState>

export function getReducer(client: ApolloClient): RootReducer {
  return combineReducers({
    apollo: client.reducer(),
    ...reducers,
  })
}
