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

  const imageGroups = prismicContent.map(group => {
    return {
      align: group.primary.align,
      work: {
        uid: group.primary.work.document.uid,
      },
      images: group.items.map(item => {
        return {
          ...item,
        }
      }),
    }
  })

  console.log(imageGroups)

  return (
    <div className="image-grid w-100 mt-md-n5">
      <Header />
      {imageGroups.map((group, idx) => (
        <ImageGroup key={idx} group={group} />
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
