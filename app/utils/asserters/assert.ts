import {
  throwBeautifulError,
  Message,
  mergeMessages,
} from '~/utils/throw-beautiful-error'

export { Message } from '~/utils/throw-beautiful-error'

export function assert(x: any, userMessage: Message): any {
  if (x) return x

  const defaultM = {
    message: `Got ${x}`,
    errorName: 'Assert error',
  }

  const m = mergeMessages(defaultM, userMessage)

  return throwBeautifulError(m)
}
