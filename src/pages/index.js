import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/sliceZone"
import Header from "../components/Header"
import { Link } from "gatsby"
import "../prismic/fragments/imageGroupFragment"
import ImageGroup from "../components/ImageGroup"

export default ({ data }) => {
  const prismicContent = data.prismicHomepage.data.body
  if (!prismicContent) return null
  return (
    <div className="image-grid w-100 mt-md-n5">
      <Header />
      {prismicContent.map((content, idx) => (
        <ImageGroup key={idx} slice={content} />
      ))}
    </div>
  )
}

export const query = graphql`
  {
    prismicHomepage {
      data {
        body {
          __typename
          ...imageGroupFragment
        }
      }
    }
  }
`
