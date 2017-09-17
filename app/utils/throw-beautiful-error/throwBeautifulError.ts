import { compose, map, mergeAll } from 'ramda'

export interface MessageObj {
  message: string
  errorName?: string
  context?: any
}

export type Message = string | MessageObj

export function convertToMessageObj(m: Message): MessageObj {
  return typeof m === 'string' ? { message: m } : m
}

export function mergeAllMessages(messages: Message[]): MessageObj {
  const run = compose(mergeAll, map(convertToMessageObj))

  return run(messages) as MessageObj
}

export function throwBeautifulError(messageOrString: Message): never {
  const m = convertToMessageObj(messageOrString)

  const { message, errorName, context } = m

  try {
    const error = new Error(message)
    // tslint:disable-next-line:no-object-mutation
    if (errorName) error.name = errorName
    throw error
  } finally {
    if (context) console.error(context)
  }
}
