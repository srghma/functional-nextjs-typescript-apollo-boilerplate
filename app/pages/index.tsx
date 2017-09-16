import { Page } from 'next-extensions'

import Layout from '~/components/Layout'
import PostList from '~/containers/PostList'
import { withData } from '~/hoc'

const Module: Page = props => {
  console.log('index page props', props)
  return (
    <Layout>
      <PostList {...props} />
    </Layout>
  )
}

export default withData(Module)
