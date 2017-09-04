import * as React from 'react'
import styled from 'styled-components'

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    max-height: 200px;
  }
`

export default (): JSX.Element => (
  <div>
    <h1>Hello!</h1>
    <Image>
      <img src="/static/pueue.png" alt="hipsta" />
    </Image>
  </div>
)
