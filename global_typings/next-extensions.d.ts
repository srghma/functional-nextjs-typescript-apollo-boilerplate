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
    url?: Url
  }

  namespace nextExt {
    // context
    interface Context {
      pathname: string
      query?: Query
      asPath: string
      err?: Error
      req?: http.IncomingMessage // server only
      res?: http.ServerResponse // server only
      jsonPageRes?: Response // client only
    }

    // page
    interface Page<P = {}> extends React.StatelessComponent<P & PageProps> {
      getInitialProps?: (ctx: Context) => Promise<object>
    }
  }

  export = nextExt
}
