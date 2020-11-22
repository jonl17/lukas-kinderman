import React, { createContext, useState } from "react"
import Header from "../components/Header"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [headerContent, setHeaderContent] = useState("")

  const updateTheHeader = html => {
    setHeaderContent(<div dangerouslySetInnerHTML={{ __html: html }} />)
  }

  return (
    <LayoutContext.Provider value={{ headerContent, updateTheHeader }}>
      <div>
        <div>{children}</div>
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout
