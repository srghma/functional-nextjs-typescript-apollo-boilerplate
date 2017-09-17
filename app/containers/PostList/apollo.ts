import { graphql, QueryProps } from 'react-apollo'

import { AllPostsQuery } from '~/graphql'
import { mergeProps } from '~/utils/ramda-ext'

import allPostsGql from './allPosts.graphql'

export type Response = AllPostsQuery.Result
export type WrappedProps = Response & QueryProps
export type InputProps = {}

const POSTS_PER_PAGE = 10

const variables: AllPostsQuery.Variables = {
  skip: 0,
  first: POSTS_PER_PAGE,
}

const withData = graphql<Response, InputProps, WrappedProps>(allPostsGql, {
  options: { variables },
  props: mergeProps(['data']),
})

export const withApollo = withData
