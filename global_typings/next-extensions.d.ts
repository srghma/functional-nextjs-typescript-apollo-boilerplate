declare module 'next-extensions' {
  import * as http from 'http'
  import * as React from 'react'

  type Query = Map<string, string>

  interface Url {
    query?: Query
    pathname: string
    back?: Function
    push?: Function
    pushTo?: Function
    replace?: Function
    replaceTo?: Function
  }

  interface PageProps {
    url: Url
  }

  export = nextExt

  namespace nextExt {
    // context
    interface Context {
      req: http.IncomingMessage
      res: http.ServerResponse
      pathname: string
      query?: Query
    }

    // page
    interface Page<P = {}>
      extends React.StatelessComponent<P & PageProps> {
      getInitialProps?: (ctx: Context) => Promise<object>
    }
  }
}
