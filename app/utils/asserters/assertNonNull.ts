import { throwBeautifulError } from '~/utils/throw-beautiful-error'

export function assertNonNull(x: any): any {
  if (x !== null && x !== undefined) return x

  const defaultM = {
    message: `Got unexpected ${x}`,
    errorName: 'assertNonNull error',
    context: { x },
  }

  return throwBeautifulError(defaultM)
}
