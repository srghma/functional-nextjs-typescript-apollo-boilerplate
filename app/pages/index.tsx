import { Page } from 'next-extensions'

import Layout from '~/components/Layout'
import PostList from '~/containers/PostList'
import withData from '~/hoc/withData'

const Module: Page = props => (
  <Layout>
    <PostList {...props} />
  </Layout>
)

export default withData(Module)
