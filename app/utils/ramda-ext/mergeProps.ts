import { curry, props, mergeAll } from 'ramda'

function mergePropsInternal(propNames: string[], x: object): object {
  return mergeAll(props(propNames, x))
}

export const mergeProps = curry<string[], object, object>(mergePropsInternal)
