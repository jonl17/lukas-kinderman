import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/sliceZone"
import Header from "../components/Header"
import { Link } from "gatsby"
import "../prismic/fragments/imageGroupFragment"
import ImageGroup from "../components/ImageGroup"
import { LayoutContext } from "../layouts"

export default ({ data }) => {
  const prismicContent = data.prismicHomepage.data.body
  if (!prismicContent) return null

  const imageGroups = prismicContent.map(group => {
    return {
      align: group.primary.align,
      work: {
        uid: group.primary.work.document ? group.primary.work.document.uid : "",
      },
      images: group.items.map(item => {
        return {
          ...item,
        }
      }),
    }
  })

  const { updateTheHeader } = useContext(LayoutContext)
  useEffect(() => {
    updateTheHeader("<p>Lukas Kindermann</p>")
  }, [])

  return (
    <div className="image-grid w-100 mt-md-n5 px-3">
      <Header />
      <div className="image-group__container">
        {imageGroups.map((group, idx) => (
          <ImageGroup key={idx} group={group} />
        ))}
      </div>
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
