import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

export const propIsNotNil = R.curryN<string | number, object, boolean>(
  2,
  R.pipe(R.prop, RA.isNotNil)
)
