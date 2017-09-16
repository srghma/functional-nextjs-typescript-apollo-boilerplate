import { curry, flip } from 'ramda'
import { assert as assertUncurried, Message } from '~/utils/asserters'

export const assert = curry<Message, any, any>(flip(assertUncurried))
