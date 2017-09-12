// import { compose } from 'recompose'
import { Page } from 'next-extensions'

import Layout from 'antd/lib/layout'

import PostList from '~/containers/PostList'
import { withData } from '~/hoc'

// const enhance = compose(withData)

const Module: Page = props => {
  console.log('index page props', props)
  return (
    <Layout>
      <PostList {...props} />
    </Layout>
  )
}

export default withData(Module)
