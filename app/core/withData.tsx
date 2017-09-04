import * as React from 'react'
import Head from 'next/head'
import { ApolloProvider } from 'react-apollo'
import { wrapDisplayName } from 'recompose'
import { pick } from 'ramda'

import { initApollo } from './initApollo'
import { initRedux, InitialState } from './initRedux'
import {
  loadApolloData,
  loadGetInitialProps,
  responceFinished,
  Context,
  Page,
  Query,
} from './shared'

type Url = { query?: Query; pathname: string }
type ComponentProp = { url?: Url }
type ComponentType = Page<ComponentProp>

type WrappedComponentProps = { serverState: InitialState }
type WrappedComponent = Page<WrappedComponentProps>

export default function withData(Component: ComponentType): WrappedComponent {
  const Wrapped: WrappedComponent = ({ serverState, ...props }) => {
    const apollo = initApollo()
    const redux = initRedux(apollo, serverState)

    return (
      // No need to use the Redux Provider
      // because Apollo sets up the store for us
      <ApolloProvider client={apollo} store={redux}>
        <Component {...props} />
      </ApolloProvider>
    )
  }

  Wrapped.displayName = wrapDisplayName(Component, 'WithData')

  Wrapped.getInitialProps = async (ctx: Context) => {
    let serverState: InitialState

    // Evaluate the composed component's getInitialProps()
    const composedInitialProps = loadGetInitialProps(Component, ctx)
    if (responceFinished(ctx)) return {}

    // Run all GraphQL queries in the component tree
    // and extract the resulting data
    if (!process.browser) {
      const apollo = initApollo()
      const redux = initRedux(apollo)

      // Provide the `url` prop data in case a GraphQL query uses it
      const url: Url = pick(['query', 'pathname'], ctx)
      const content = <Component url={url} {...composedInitialProps} />
      const apolloData = await loadApolloData(content, apollo, redux)
      Head.rewind()

      // No need to include other initial Redux state because when it
      // initialises on the client-side it'll create it again anyway
      serverState = {
        apollo: {
          // Only include the Apollo data state
          data: apolloData,
        },
      }
    }

    return {
      serverState,
      ...composedInitialProps,
    }
  }

  return Wrapped
}
