import { throwBeautifulError } from '~/utils/throw-beautiful-error'

export function assertNotNil<X>(x: X | null | undefined): X | never {
  if (x !== null && x !== undefined && !isNaN(x as any)) return x

  const message = {
    message: `Got unexpected ${x}`,
    errorName: 'Assert not nil error',
  }

  return throwBeautifulError(message)
}
