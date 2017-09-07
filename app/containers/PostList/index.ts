import { graphql } from 'react-apollo'

import { allPostsQuery, allPostsQueryVariables } from '~/schema'
import { nullthrows } from '~/utils'

import { Presentation, PresentationProps } from './presentation'
import allPostsGql from './allPosts.gql'

const POSTS_PER_PAGE = 10

const withData = graphql<allPostsQuery, {}, PresentationProps>(allPostsGql, {
  options: () => {
    const variables: allPostsQueryVariables = {
      skip: 0,
      first: POSTS_PER_PAGE,
    }
    return { variables }
  },
  props: ({ data }) => {
    data = nullthrows(data)
    const props: PresentationProps = data
    return props
  },
})

export default withData(Presentation)
