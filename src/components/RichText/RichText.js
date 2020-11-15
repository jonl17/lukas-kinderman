import React from "react"

const RichText = ({ html }) => {
  return (
    <div className="col-lg-11" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default RichText
