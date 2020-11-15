import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import SliceZone from "../../components/sliceZone"
import ExitButton from "../../components/ExitButton"

const Page = ({ data }) => {
  if (!data) {
    return null
  }
  const { body, subtitle } = data.prismicPage.data
  return (
    <div className="mt-4 mx-3 position-relative">
      <ExitButton />
      {subtitle && (
        <div
          className="page__subtitle"
          dangerouslySetInnerHTML={{
            __html: subtitle.html,
          }}
        />
      )}
      <SliceZone body={body} />
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
        subtitle {
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
        }
      }
    }
  }
`
