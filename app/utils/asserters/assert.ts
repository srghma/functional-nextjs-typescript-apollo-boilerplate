import { curry } from 'ramda'
import {
  throwBeautifulError,
  mergeMessages,
  Message,
} from '../throw-beautiful-error'

type Predicate = (x: any) => boolean

function assertInternal(
  predicate: Predicate,
  userMessage: Message,
  x: any
): any {
  const output = predicate(x)
  if (output) return x

  const defaultM = {
    message: `Predicate returned ${output}`,
    errorName: 'assert error',
    context: { x },
  }

  const m = mergeMessages(defaultM, userMessage)
  return throwBeautifulError(m)
}

export const assert = curry<Predicate, Message, any, any>(assertInternal)
