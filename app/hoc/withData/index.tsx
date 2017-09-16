import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { compose, wrapDisplayName, setStatic } from 'recompose'
import { Page } from 'next-extensions'

import { initApollo, initRedux } from './initializers'
import { assert } from '~/utils/asserters-curried'

import { getInitialPropsFor } from './getInitialPropsFor'

interface WithDataProps {
  apolloData: object | null
}

export const withData = (Component: Page) => {
  const WithData = ({ apolloData, ...props }: WithDataProps) => {
    console.log(apolloData, props)
    const validateNotNull = assert(
      `apolloData is ${apolloData},
      probably getInitialProps wasn't executed,
      assure that withData is the outermost wrapper for your Page`
    )

    const apollo = initApollo()
    const redux = initRedux(apollo, validateNotNull(apolloData))

    return (
      // No need to use the Redux Provider
      // because Apollo sets up the store for us
      <ApolloProvider client={apollo} store={redux}>
        <Component {...props} />
      </ApolloProvider>
    )
  }

  const enhanced = compose<WithDataProps, {}>(
    setStatic('displayName', wrapDisplayName(Component, 'WithData')),
    setStatic('getInitialProps', getInitialPropsFor(Component))
  )(WithData) as any

  return enhanced as Page<WithDataProps>
}
