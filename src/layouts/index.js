import React, { createContext, useState } from "react"
import Header from "../components/Header"
import "./styles.scss"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Lukas Kinderman")

  return (
    <LayoutContext.Provider value={{ pageTitle, setPageTitle }}>
      <Header title={pageTitle} />
      <div className="px-2 px-md-5 mainContentWrap">
        <div>{children}</div>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
