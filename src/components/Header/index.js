import React from "react"
import "./styles.scss"

const Header = ({ title }) => {
  return (
    <div className="d-flex align-items-center wrap py-4 headerWrap px-2 px-md-5">
      <h1 className="m-0">{title}</h1>
    </div>
  )
}

export default Header
