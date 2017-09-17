import { curry, props, mergeAll } from 'ramda'

/**
 * Function that do the same as object spread
 *
 * example:
 * // this statements are equal
 * let propsCopy = { ...obj.foo, ...obj.bar }
 * let propsCopy = mergeProps(['foo', 'bar'], obj)
 */
export const mergeProps = curry<string[], object, object>(function(
  propNames: string[],
  x: object
): object {
  return mergeAll(props(propNames, x))
})
