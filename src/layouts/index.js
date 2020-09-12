import React, { createContext, useState } from "react"
import Header from "../components/Header"
import "./styles.scss"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const DEFAULT_HEADER_CONTENT = () => (
    <h1 className="m-0 bold">Lukas Kinderman</h1>
  )
  const [headerContent, setHeaderContent] = useState(DEFAULT_HEADER_CONTENT)

  return (
    <LayoutContext.Provider
      value={{ headerContent, setHeaderContent, DEFAULT_HEADER_CONTENT }}
    >
      <Header />
      <div className="px-2 px-md-5 mainContentWrap">
        <div>{children}</div>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
