import { compose, wrapDisplayName, setDisplayName } from 'recompose'
import { Page } from 'next-extensions'

import { setGetInitialProps } from '~/utils/recompose-ext'
import { getInitialPropsFor } from './getInitialPropsFor'
import { WithDataHoc, WithDataHocType } from './presentation'

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
