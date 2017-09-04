import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { signIn, signOut } from './actions'
import { AuthState } from './types'

// Initial State
const initialState: AuthState = {
  token: undefined,
}

// Reducer
export default reducerWithInitialState(initialState)
  .case(signIn, (state, { token }) => ({
    ...state,
    token,
  }))
  .case(signOut, state => ({
    ...state,
    token: undefined,
  }))
