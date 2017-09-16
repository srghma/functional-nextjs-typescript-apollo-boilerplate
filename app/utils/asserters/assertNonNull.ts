import { curry } from 'ramda'
import {
  Message,
  mergeMessages,
  throwBeautifulError,
} from '../throw-beautiful-error'

function assertNonNullInternal(userMessage: Message, x: any): any {
  if (x !== null && x !== undefined) return x

  const defaultM = {
    message: 'Got unexpected null or undefined',
    errorName: 'assertNonNull error',
    context: { x },
  }

  const m = mergeMessages(defaultM, userMessage)
  return throwBeautifulError(m)
}

export const assertNonNull = curry<Message, any, any>(assertNonNullInternal)
