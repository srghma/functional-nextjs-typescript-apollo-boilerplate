declare module 'next-routes' {
  import NextLink from 'next/link'
  import NextRouter from 'next/router'

  export = nr

  function nr(opts?: any): nr.Routes

  namespace nr {
    interface Routes {
      routes: any
      Link: any
      Router: any
      add(name: string, pattern: string, page: string): Routes
      findByName(name: string): Route
      match(url: string): any // Route | Routes?
      findAndGetUrls(nameOrUrl: string, params: any): any
      getRequestHandler(app: any, customHandler?: any): any
      getLink(Link: any): any
      getRouter(Router: any): any
    }

    interface Route {
      match(path: string): any
      valuesToParams(values: ReadonlyArray<string>): any
      getHref(params: any): any
      getAs(params: any): any
      getUrls(params: any): any
    }
  }
}
