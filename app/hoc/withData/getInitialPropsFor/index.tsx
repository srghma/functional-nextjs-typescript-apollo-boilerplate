import Head from 'next/head'
import * as R from 'ramda'
import { Page, Context } from 'next-extensions'

import { initApollo } from '../initApollo'
import { initRedux } from '../initRedux'

import { loadApolloData } from './loadApolloData'
import { loadGetInitialProps } from './loadGetInitialProps'
import { responceFinished } from './responceFinished'

export const getInitialPropsFor = (Component: Page) => async (ctx: Context) => {
  // Evaluate the composed component's getInitialProps()
  const componentInitialProps = await loadGetInitialProps(Component, ctx)

  if (responceFinished(ctx)) {
    const message = `response was finished in getInitialProps of ${Component.displayName}`
    console.log(message)
    return {}
  }

  let apolloData: object | null = null
  if (!process.browser) {
    // Run all GraphQL queries in the component tree
    // and extract the resulting data
    const apollo = initApollo()
    const redux = initRedux(apollo)

    // Provide the `url` prop data in case a GraphQL query uses it
    const url = R.pick(['query', 'pathname'], ctx)
    const content = <Component url={url} {...componentInitialProps} />
    apolloData = await loadApolloData(content, apollo, redux)
    Head.rewind()
  }

  return {
    apolloData,
    ...componentInitialProps,
  }
}
