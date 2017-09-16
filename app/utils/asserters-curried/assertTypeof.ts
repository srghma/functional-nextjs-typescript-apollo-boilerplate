import { curry } from 'ramda'
import { assertTypeof as assertTypeofUncurried } from '~/utils/asserters'

// NOTE:
// uncurried version is smarter

type TypeLiteral =
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'
export const assertTypeof = curry<TypeLiteral, any, any>(assertTypeofUncurried)
