import React from "react"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <div className="px-5">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
