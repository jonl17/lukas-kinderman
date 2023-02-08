import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="header d-flex justify-content-between w-100 mt-4 ml-3">
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
