import * as React from 'react'
import { Context } from './context'

interface Url {
  query?: Map<string, string>
  pathname: string
  back?: Function
  push?: Function
  pushTo?: Function
  replace?: Function
  replaceTo?: Function
}

export interface PageProps {
  url: Url
}

export interface Page<P = {}> extends React.StatelessComponent<P & PageProps> {
  getInitialProps?: (ctx: Context) => Promise<object>
}
