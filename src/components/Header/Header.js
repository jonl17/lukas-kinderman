import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import { Link } from "gatsby"

const Header = () => {
  const { headerContent } = useContext(LayoutContext)
  return (
    <div className="header d-flex justify-content-between w-100">
      <div className="header__dynamic-content py-4 px-2 px-md-5">
        {headerContent}
      </div>
      <Link
        className="header__information-link d-flex align-items-center py-4 px-2 px-md-5"
        to="/info"
      >
        <h1 className="m-0">Info</h1>
      </Link>
    </div>
  )
}

export default Header
