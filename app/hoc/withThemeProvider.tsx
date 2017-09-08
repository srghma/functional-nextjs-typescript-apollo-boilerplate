import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeColorMap } from '~/theming'

// prettier-ignore
export const withThemeProvider =
  (colorMap: ThemeColorMap) =>
  // NOTE: why <P extends {}> here https://github.com/Microsoft/TypeScript/issues/4922
  <P extends {}>(BaseComponent: React.ComponentType<P>) =>
  (props: P) => (
  <ThemeProvider theme={colorMap}>
    <BaseComponent {...props} />
  </ThemeProvider>
)
