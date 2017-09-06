import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeColorMap } from '~/theming'

// prettier-ignore
const themed =
  (colorMap: ThemeColorMap) =>
  <P extends {}>(BaseComponent: React.ComponentType<P>) =>
  (props: P) => (
  <ThemeProvider theme={colorMap}>
    <BaseComponent {...props} />
  </ThemeProvider>
)

export default themed
