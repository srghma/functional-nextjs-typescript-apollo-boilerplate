import { compose } from 'recompose'
import { Page } from 'next-extensions'

import PostList from '~/containers/PostList'
import { withData } from '~/hoc'

const enhance = compose(withData)

const Module: Page = props => {
  console.log('page props', props)
  return <PostList {...props} />
}

export default enhance(Module)
