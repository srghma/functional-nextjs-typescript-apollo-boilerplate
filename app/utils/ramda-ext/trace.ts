import { curry } from 'ramda'

function traceInternal(message: string, x: any): any {
  console.log(message, x)
  return x
}

export const trace = curry<string, any, any>(traceInternal)
