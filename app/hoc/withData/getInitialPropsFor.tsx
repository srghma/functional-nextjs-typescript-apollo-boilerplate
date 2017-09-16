import Head from 'next/head'
import { pick } from 'ramda'
import { Page, Context } from 'next-extensions'

import { initApollo, initRedux } from './initializers'

import { loadApolloData } from './utils/loadApolloData'
import { loadGetInitialProps } from './utils/loadGetInitialProps'
import { responceFinished } from './utils/responceFinished'

export const getInitialPropsFor = (Component: Page) => async (ctx: Context) => {
  console.log(`getInitialProps, browser=${process.browser}`)

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
    const url = pick(['query', 'pathname'], ctx)
    const content = <Component url={url} {...componentInitialProps} />
    apolloData = await loadApolloData(content, apollo, redux)
    Head.rewind()
  }

  return {
    apolloData,
    ...componentInitialProps,
  }
}
