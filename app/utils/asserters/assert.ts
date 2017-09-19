import { curry } from 'ramda'

import {
  throwBeautifulError,
  Message,
  mergeAllMessages,
} from './throwBeautifulError'

export { Message } from './throwBeautifulError'

type TestFn = (x: any) => any

export const assert = curry<TestFn, Message, any, any>(function(
  test: TestFn,
  userM: Message,
  x: any
): any {
  if (test(x)) return x

  const defaultM = {
    message: `Got unexpected ${x}`,
    errorName: 'Assert error',
  }

  const m = mergeAllMessages([defaultM, userM])
  return throwBeautifulError(m)
})
