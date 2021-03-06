import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import { Link } from "gatsby"

const Header = () => {
  const { headerContent } = useContext(LayoutContext)
  return (
    <div className="header d-flex justify-content-between w-100 mt-4 ml-3">
      <div className="header__dynamic-content">{headerContent}</div>
      <Link
        className="header__information-link d-flex align-items-center mt-4 mr-3"
        to="/info"
      >
        <p className="m-0">Info</p>
      </Link>
    </div>
  )
}

export default Header
