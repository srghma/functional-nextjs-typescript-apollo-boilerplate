import { graphql, QueryProps } from 'react-apollo'

import { allPostsQuery, allPostsQueryVariables } from '~/schema'
import { mergeProps } from '~/utils/ramda-ext'

import allPostsGql from './allPosts.gql'

export type Response = allPostsQuery
export type WrappedProps = Response & QueryProps
export type InputProps = {}

const POSTS_PER_PAGE = 10

const variables: allPostsQueryVariables = {
  skip: 0,
  first: POSTS_PER_PAGE,
}

const withData = graphql<Response, InputProps, WrappedProps>(allPostsGql, {
  options: { variables },
  props: mergeProps(['data']),
})

export const withApollo = withData
