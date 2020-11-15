import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import SliceZone from "../../components/sliceZone"

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
    <div>
      <ExitButton />
      <SliceZone body={data.prismicPage.data.body} />
    </div>
  )
}

export default Page

export const query = graphql`
  query($id: String!) {
    prismicPage(id: { eq: $id }) {
      uid
      data {
        title {
          html
        }
        body {
          __typename
          ... on PrismicPageBodyRichText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPageBodyTextImages {
            items {
              image {
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`
