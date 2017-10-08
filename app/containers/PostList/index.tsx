import * as RE from 'recompose'
import * as RA from 'ramda-adjunct'
import * as R from 'ramda'

import { withApollo, WrappedProps } from './apollo'
import { PostList } from './presentation'

export default R.compose(
  withApollo,
  RE.branch(
    R.path(['data', 'error']),
    RE.renderComponent(() => <p>no posts yet</p>)
  )
)(PostList)
