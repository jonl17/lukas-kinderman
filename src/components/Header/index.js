import React, { useContext } from "react"
import "./styles.scss"
import { LayoutContext } from "../../layouts"

const Header = () => {
  const { headerContent } = useContext(LayoutContext)
  return (
    <div className="d-flex align-items-center wrap py-4 headerWrap px-2 px-md-5">
      {headerContent}
    </div>
  )
}

export default Header
