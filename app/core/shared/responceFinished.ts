import { Context } from './types'
import { pathOr } from 'ramda'

// check whether during getInitialProps occured redirect or something like that
export const responceFinished: (ctx: Context) => boolean = pathOr(false, [
  'res',
  'finished',
])
