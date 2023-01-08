import React from "react"

const RichText = ({ html }) => {
  return (
    <div
      className="col-lg-11 p-0 rich-text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText
