import React, { useContext } from "react"
import { Link as GatsbyLink } from "gatsby"
import { LayoutContext } from "../../layouts"
import WorkHeaderContent from "../WorkHeaderContent"

export default ({
  to,
  children,
  containerClass,
  title,
  subtitle,
  ...props
}) => {
  const { setHeaderContent, DEFAULT_HEADER_CONTENT } = useContext(LayoutContext)
  if (to) {
    return (
      <GatsbyLink
        onMouseEnter={() =>
          setHeaderContent(
            <WorkHeaderContent title={title} subtitle={subtitle} />
          )
        }
        onMouseLeave={() => setHeaderContent(DEFAULT_HEADER_CONTENT)}
        onClick={() =>
          setHeaderContent(
            <WorkHeaderContent title={title} subtitle={subtitle} />
          )
        }
        className={containerClass}
        to={to}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  )
}
