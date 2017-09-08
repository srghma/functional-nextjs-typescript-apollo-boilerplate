import { compose } from 'recompose'
import { Page } from 'next-extensions'

import PostList from '~/containers/PostList'
import { withData, withThemeProvider } from '~/hoc'
import { colorMap } from '~/theming'

// NOTE: withData is outermost wrapper
const enhance = compose(withData, withThemeProvider(colorMap))

const Module: Page = props => {
  console.log('page props', props)
  return <PostList {...props} />
}

export default enhance(Module)
