import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Lukas Kindermann</title>
        <link rel="icon" type="image/png" href="/image.png" />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
