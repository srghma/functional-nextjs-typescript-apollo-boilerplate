import { compose, branch, renderComponent } from 'recompose'
import Spin from 'antd/lib/spin'

import { withApollo, WrappedProps } from './apollo'
import { PostList } from './presentation'

export default compose(
  withApollo,
  branch(
    ({ loading }: WrappedProps) => loading,
    renderComponent(() => <Spin />)
  ),
  branch(
    ({ allPosts }: WrappedProps) => allPosts.length === 0,
    renderComponent(() => <p>no posts yet</p>)
  )
)(PostList)
