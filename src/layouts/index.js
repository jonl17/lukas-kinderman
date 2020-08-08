import React from "react"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
