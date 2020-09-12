import React from "react"

export default ({ title, subtitle }) => (
  <h1 className="bold m-0">
    <span className="italic">{title}</span>, {subtitle}
  </h1>
)
