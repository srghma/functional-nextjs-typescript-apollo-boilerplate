import { curry, props, mergeAll } from 'ramda'

/**
 * Function that does the same as object spread
 *
 * example:
 * // this statements are equal
 * let propsCopy = { ...obj.foo, ...obj.bar }
 * let propsCopy = flattenProps(['foo', 'bar'], obj)
 */
export const flattenProps = curry<string[], object, object>(function(
  propNames: string[],
  x: object
): object {
  return mergeAll(props(propNames, x))
})
