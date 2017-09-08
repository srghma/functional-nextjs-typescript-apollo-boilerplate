import { graphql } from 'react-apollo'

import { allPostsQuery, allPostsQueryVariables } from '~/schema'
import { nullthrows } from '~/utils'

import { PostList, PostListProps } from './presentation'
import allPostsGql from './allPosts.gql'

const POSTS_PER_PAGE = 10

const withData = graphql<allPostsQuery, {}, PostListProps>(allPostsGql, {
  options: () => {
    const variables: allPostsQueryVariables = {
      skip: 0,
      first: POSTS_PER_PAGE,
    }
    return { variables }
  },
  props: ({ data }) => {
    data = nullthrows(data)
    const props: PostListProps = data
    return props
  },
})

export default withData(PostList)
