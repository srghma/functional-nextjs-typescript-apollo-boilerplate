import { curry } from 'ramda'

import {
  throwBeautifulError,
  Message,
  mergeAllMessages,
} from '~/utils/throw-beautiful-error'

export { Message } from '~/utils/throw-beautiful-error'

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
