import { throwBeautifulError, Message } from '../throw-beautiful-error'

interface TypeMap {
  string: string
  number: number
  boolean: boolean
  symbol: Symbol
  undefined: undefined
  object: object
  function: Function
}

export function assertTypeof<N extends keyof TypeMap>(
  userMessage: Message,
  expectedType: N,
  x: any
): TypeMap[N] {
  const actualType = typeof x
  if (actualType === expectedType) return x

  return throwBeautifulError({
    message: `Expected ${expectedType}, but got ${actualType}`,
    errorName: 'assert error',
    context: { x },
  })
}
