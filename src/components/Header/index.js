import React, { useContext } from "react"
import "./styles.scss"
import { LayoutContext } from "../../layouts"
import { Link } from "gatsby"

const Header = () => {
  const { headerContent } = useContext(LayoutContext)
  return (
    <React.Fragment>
      <div className="d-flex align-items-center wrap py-4 headerWrap px-2 px-md-5">
        {headerContent}
      </div>
      <Link
        className="infoWrap d-flex align-items-center wrap py-4 px-2 px-md-5"
        to="/info"
      >
        <h1 className="bold m-0">Info</h1>
      </Link>
    </React.Fragment>
  )
}

export default Header
