import { compose } from 'recompose'
import { Page } from 'next-extensions'

// TODO
// import {
//   App,
//   Box,
//   Title,
//   Header,
//   Search,
//   Button
// } from 'grommet'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Search from 'grommet/components/Search'
import Button from 'grommet/components/Button'

import PostList from '~/containers/PostList'
import { withData } from '~/hoc'

const enhance = compose(withData)

const Module: Page = props => (
  <App centered={false}>
    <Header>
      <Title>Sample Title</Title>
      <Box flex={true} justify="end" direction="row" responsive={false}>
        <Search
          inline={true}
          fill={true}
          size="medium"
          placeHolder="Search"
          dropAlign={{ right: 'right' }}
        />
      </Box>
    </Header>
    <Box
      direction="row"
      justify="start"
      align="center"
      wrap={true}
      pad="medium"
      margin="small"
      colorIndex="light-2"
    >
      <Button label="Label" href="#" primary={true} />
    </Box>
    <PostList {...props} />
  </App>
)

export default enhance(Module)
