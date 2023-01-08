import React, { createContext, useState } from "react"
import { Helmet } from "react-helmet"

export const LayoutContext = createContext()

const Layout = ({ children }) => {
  const [headerContent, setHeaderContent] = useState("")

  const updateTheHeader = html => {
    setHeaderContent(<div dangerouslySetInnerHTML={{ __html: html }} />)
  }

  return (
    <LayoutContext.Provider value={{ headerContent, updateTheHeader }}>
      <Helmet>
        <title>Lukas Kindermann</title>
        <link rel="icon" type="image/png" href="/image.png" />
      </Helmet>
      <div>{children}</div>
    </LayoutContext.Provider>
  )
}

export default Layout
