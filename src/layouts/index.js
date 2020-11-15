import React, { createContext, useState } from "react"
import Header from "../components/Header"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [headerContent, setHeaderContent] = useState(
    <h1 className="m-0 bold">Lukas Kindermann</h1>
  )

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
