import { compose, setDisplayName, wrapDisplayName } from 'recompose'
import { Page } from 'next-extensions'

import { setGetInitialProps } from 'recompose-ext'

import { getInitialPropsFor } from './getInitialPropsFor'
import { WithDataHoc, WithDataHocType } from './hoc'

const withData: WithDataHocType = (Component: Page) => {
  const wrapped = WithDataHoc(Component)
  const getInitialProps = getInitialPropsFor(Component)
  const displayName = wrapDisplayName(Component, 'WithData')

  const enhance: any = compose(
    setGetInitialProps(getInitialProps),
    setDisplayName(displayName)
  )

  return enhance(wrapped)
}

export default withData
