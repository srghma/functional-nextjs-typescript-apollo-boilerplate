import { AuthState } from './auth/types'
import auth from './auth/reducer'

export interface RootState {
  auth: AuthState
}

export const reducers = {
  auth,
}
