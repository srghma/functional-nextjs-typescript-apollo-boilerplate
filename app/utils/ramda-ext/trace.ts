import { curry } from 'ramda'

export const trace = curry<string, any, any>(function(
  message: string,
  x: any
): any {
  console.log(message, x)
  return x
})
