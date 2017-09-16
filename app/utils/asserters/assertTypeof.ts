import { throwBeautifulError } from '~/utils/throw-beautiful-error'

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
  expectedType: N,
  x: any
): TypeMap[N] {
  const actualType = typeof x
  if (actualType === expectedType) return x

  const defaultM = {
    message: `Expected ${expectedType}, but got ${actualType}`,
    errorName: 'assert error',
    context: { x },
  }

  return throwBeautifulError(defaultM)
}
