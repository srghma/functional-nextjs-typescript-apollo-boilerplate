import { Context, Page } from 'next-extensions'

export async function loadGetInitialProps<P>(
  Component: Page<P>,
  ctx: Context
): Promise<object> {
  if (!Component.getInitialProps) return {}
  return Component.getInitialProps(ctx)
}
