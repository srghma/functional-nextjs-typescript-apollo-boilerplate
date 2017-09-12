import { graphql } from 'react-apollo'
import { compose, branch, renderComponent } from 'recompose'
import Spinning from 'grommet/components/icons/Spinning'

import { allPostsQuery, allPostsQueryVariables } from '~/schema'

import { PostList } from './presentation'
import allPostsGql from './allPosts.gql'

const POSTS_PER_PAGE = 10

const withData = graphql<allPostsQuery>(allPostsGql, {
  options: {
    // TODO: make use of allPostsQueryVariables here
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
    },
  },
})

export default compose(
  withData,
  branch(({ data: { loading } }) => loading, renderComponent(<Spinning />))
)(PostList)
