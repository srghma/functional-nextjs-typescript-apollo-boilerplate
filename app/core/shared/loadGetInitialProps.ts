import { Context, Page } from './types'

export async function loadGetInitialProps<P>(
  Component: Page<P>,
  ctx: Context
): Promise<object> {
  if (!Component.getInitialProps) return {}
  return Component.getInitialProps(ctx)
}
