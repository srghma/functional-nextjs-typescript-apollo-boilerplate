// export function nullthrows<T>(x: T | undefined | null): x is T {
//   return x !== null && x !== undefined
// }

export function nullthrows<T>(x: T | undefined | null): T {
  if (x === null || x === undefined) {
    throw new Error('Got unexpected null or undefined')
  } else {
    return x
  }
}
