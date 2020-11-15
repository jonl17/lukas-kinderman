import React from "react"
import { Link } from "gatsby"

const ExitButton = () => (
  <Link
    className="page__exitbtn-wrap d-flex align-items-center mt-4 mr-3"
    to="/"
  >
    <svg
      width="48"
      height="47"
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5L47 46.5" stroke="black" />
      <path d="M47 0.5L0.999998 46.5" stroke="black" />
    </svg>
  </Link>
)

export default ExitButton
