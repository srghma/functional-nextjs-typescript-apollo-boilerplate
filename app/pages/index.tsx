import { compose } from 'recompose'

import PostList from '~/containers/PostList'
// import withData from '~/hoc/withData'
import { colorMap } from '~/theming'
import themed from '~/hoc/themed'
import { Page } from '~/types'

const enhance = compose(themed(colorMap))
const Module: Page = props => {
  console.log(props)
  return <PostList {...props} />
}

export default enhance(Module)
