import { compose, branch, renderComponent } from 'recompose'
import { prop } from 'ramda'

import { withApollo } from './apollo'
import { PostList } from './presentation'

export default compose(
  withApollo,
  branch(prop('error'), renderComponent(() => <p>no posts yet</p>))
)(PostList)
