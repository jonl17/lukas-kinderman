import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import SliceZone from "../../components/sliceZone"

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

const Page = ({ data }) => {
  if (!data) {
    return null
  }
  const { body, subtitle } = data.prismicPage.data
  return (
    <div className="mt-4 mx-3 position-relative">
      <ExitButton />
      {
        <div
          className="page__subtitle"
          dangerouslySetInnerHTML={{
            __html: subtitle.html,
          }}
        />
      }
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
