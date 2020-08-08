import React from "react"
import Header from "../components/Header"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-2 px-md-5 mainContentWrap">
        <div>{children}</div>
      </div>
    </>
  )
}

export default Layout
