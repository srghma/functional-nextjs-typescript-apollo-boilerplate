import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('Auth')

export const signIn = actionCreator<{ token: string }>('SIGN_IN')
export const signOut = actionCreator('SIGN_OUT')
