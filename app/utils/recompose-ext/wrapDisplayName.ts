import { ComponentType } from 'react'
import { wrapDisplayName as wrapDisplayNameInternal } from 'recompose'
import { curry, flip, compose } from 'ramda'

interface WrapDisplayNameFn {
  (wrapperName: string, component: ComponentType<any>): string
}

export const wrapDisplayName: WrapDisplayNameFn = compose(curry, flip)(
  wrapDisplayNameInternal
)
