import { graphql } from 'react-apollo'
// import { compose, branch, renderComponent } from 'recompose'
// import Spin from 'antd/lib/spin'

import { allPostsQuery } from '~/schema'

import { PostList } from './presentation'
import allPostsGql from './allPosts.gql'

const POSTS_PER_PAGE = 10

const withData = graphql<allPostsQuery>(allPostsGql, {
  options: props => {
    console.log('calling options', props)
    return {
      // TODO: make use of allPostsQueryVariables here
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE,
      },
    }
  },
})

// export default compose(
//   withData,
//   branch(
//     ({ data: { loading } }) => {
//       console.log(loading)
//       return loading
//     },
//     renderComponent(Spin as any)
//   )
// )(PostList)

export default withData(PostList)
