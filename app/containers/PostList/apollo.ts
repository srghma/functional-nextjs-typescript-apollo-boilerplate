import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import { graphql, QueryProps } from 'react-apollo'

import { AllPosts } from '~/graphql'

import allPostsGql from './allPosts.graphql'

export type Response = AllPosts.Query
export type WrappedProps = Response & QueryProps
export type InputProps = {}

const defaultPageSize = 10

const pageToSkip = (page: number) => (page - 1) * defaultPageSize

const variables: AllPosts.Variables = {
  skip: pageToSkip(1),
  first: defaultPageSize,
}

const withData = graphql<Response, InputProps, WrappedProps>(allPostsGql, {
  options: props => {
    console.log('apollo options', props)
    return { variables }
  },
  props: ({ data }) => {
    console.log('apollo props1', data)
    return {
      data,
      loadMorePosts: (pagination, filters, sorter) => {
        console.log('apollo props2', pagination, filters, sorter)
        return data.fetchMore({
          variables: {
            skip: pageToSkip(pagination.current),
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            // NOTE:
            // and here I have stumbled
            // merging allPosts is treaky
            // it adds new posts even thay were already added
            console.log('apollo previousResult', previousResult)
            if (!fetchMoreResult) {
              return previousResult
            }
            return R.merge(previousResult, {
              allPosts: [
                ...previousResult.allPosts,
                ...fetchMoreResult.allPosts,
              ],
            })
          },
        })
      },
    }
  },
})

export const withApollo = withData
