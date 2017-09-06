import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeColorMap } from '~/theming'

// prettier-ignore
const themed =
  (colorMap: ThemeColorMap) =>
  // NOTE: why <P extends {}> here https://github.com/Microsoft/TypeScript/issues/4922
  <P extends {}>(BaseComponent: React.ComponentType<P>) =>
  (props: P) => (
  <ThemeProvider theme={colorMap}>
    <BaseComponent {...props} />
  </ThemeProvider>
)

export default themed
