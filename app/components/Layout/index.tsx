import * as React from 'react'
import AntdLayout from 'antd/lib/layout'
import styled from 'styled-components'

const { Header, Footer, Content } = AntdLayout

const StyledAntdLayout = styled(AntdLayout)`height: 100vh;`

const Layout: React.SFC = ({ children }) => (
  <StyledAntdLayout>
    <Header>Header</Header>
    <Content>{children}</Content>
    <Footer>Footer</Footer>
  </StyledAntdLayout>
)
export default Layout
