import { curry } from 'ramda'

import { throwBeautifulError } from '~/utils/throw-beautiful-error'

type TypeLiteral =
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'

export const assertTypeof = curry<TypeLiteral, any, any>(function(
  expectedType: TypeLiteral,
  x: any
): any {
  const actualType = typeof x
  if (actualType === expectedType) return x

  const message = {
    message: `Expected ${x} to have type ${expectedType}, but got ${actualType}`,
    errorName: 'Assert type error',
  }

  return throwBeautifulError(message)
})
