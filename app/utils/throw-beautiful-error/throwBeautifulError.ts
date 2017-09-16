import { compose, map, mergeAll } from 'ramda'

export interface MessageObj {
  message: string
  errorName?: string
  context?: any
}

export type Message = string | MessageObj

export function convertToMessage(m: Message): MessageObj {
  return typeof m === 'string' ? { message: m } : m
}

export function mergeMessages(...messages: Message[]): MessageObj {
  const run = compose(mergeAll, map(convertToMessage))

  return run(messages) as MessageObj
}

export function throwBeautifulError(messageOrString: Message): never {
  const m = convertToMessage(messageOrString)

  const { message, errorName, context } = m

  try {
    const error = new Error(message)
    if (errorName) error.name = errorName
    throw error
  } finally {
    if (context) console.error(context)
  }
}
