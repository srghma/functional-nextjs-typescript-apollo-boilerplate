import { IncomingMessage, ServerResponse } from 'http'

export type Context = {
  req: IncomingMessage
  res: ServerResponse
  pathname: string
  query?: Map<string, string>
}
