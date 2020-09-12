import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { htmlSerializer } from "../../prismic-config/htmlSerializer"
import { Link } from "gatsby"
import styles from "./styles.scss"

const ExitButton = () => (
  <Link
    className="infoWrap d-flex align-items-center wrap py-4 px-2 px-md-5 exitButtonWrap"
    to="/"
  >
    <span id="first" />
    <span id="second" />
  </Link>
)

const Page = ({ data }) => {
  if (!data) {
    return null
  }
  return (
    <div className="container">
      <ExitButton />
      <RichText
        render={data.prismic.page.content}
        htmlSerializer={htmlSerializer}
      />
    </div>
  )
}

export default Page

export const query = graphql`
  query($uid: String!) {
    prismic {
      page(lang: "en-us", uid: $uid) {
        title
        content
      }
    }
  }
`
