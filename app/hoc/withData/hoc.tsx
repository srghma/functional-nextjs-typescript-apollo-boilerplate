import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { identity } from 'ramda'
import { Page } from 'next-extensions'
import { assert } from 'ramda-asserters'

import { initApollo } from './initApollo'
import { initRedux } from './initRedux'

interface WithDataProps {
  apolloData: object | undefined
}

export type WithDataPage = Page<WithDataProps>

export interface WithDataHocType {
  (comnponent: Page): WithDataPage
}

export const WithDataHoc: WithDataHocType = Component => ({
  apolloData,
  ...props,
}) => {
  const apollo = initApollo()

  assert(
    identity,
    `apolloData is ${apolloData},
    probably getInitialProps wasn't executed,
    assure that withData is the outermost wrapper for your Page`,
    apolloData
  )

  const redux = initRedux(apollo, apolloData as object)

  return (
    // No need to use the Redux Provider
    // because Apollo sets up the store for us
    <ApolloProvider client={apollo} store={redux}>
      <Component {...props} />
    </ApolloProvider>
  )
}
