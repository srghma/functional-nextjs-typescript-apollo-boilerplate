import { IncomingMessage, ServerResponse } from 'http'

export type Query = Map<string, string>

export type Context = {
  req: IncomingMessage
  res: ServerResponse
  pathname: string
  query?: Query
}

export interface Page<P = {}> extends React.StatelessComponent<P> {
  getInitialProps?: (ctx: Context) => Promise<object>
}
