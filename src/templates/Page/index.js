import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../../components/sliceZone"
import ExitButton from "../../components/ExitButton"
import { withPreview } from "gatsby-source-prismic"

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
      <div className="slice-wrap">
        <SliceZone body={body} />
      </div>
    </div>
  )
}

export default withPreview(Page)

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
