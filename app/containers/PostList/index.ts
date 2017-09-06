import { graphql } from 'react-apollo'

import { nullthrows } from '~/utils'

import Presentation from './presentation'
import allPostsGql from './allPosts.gql'

const POSTS_PER_PAGE = 10

const withData = graphql(allPostsGql, {
  options: () => ({
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  }),
  props: ({ data }) => {
    data = nullthrows(data)
    const loading = data.loading
    // const loading = data.allPosts
    return {
      allPosts: [],
      loading,
    }
  }
})

export default withData(Presentation)
