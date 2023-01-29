import { graphql } from "gatsby"
import React, { useContext, useEffect } from "react"
import Header from "../components/Header"
import ImageGroup from "../components/ImageGroup"
import { LayoutContext } from "../layouts"
import "../prismic/fragments/imageGroupFragment"
import MobileWorkFooter from "../components/MobileWorkFooter"

export default ({ data }) => {
  const prismicContent = data.prismicHomepage.data.body
  if (!prismicContent) return null

  const imageGroups = prismicContent.map((group, idx) => {
    return {
      align: group.primary.align,
      work: {
        id: idx,
        uid: group.primary.work.document ? group.primary.work.document.uid : "",
      },
      images: group.items.map(item => {
        return {
          ...item,
        }
      }),
    }
  })

  const { updateTheHeader, headerContent } = useContext(LayoutContext)
  useEffect(() => {
    updateTheHeader("<h1>Lukas Kindermann</h1>")
  }, [])

  return (
    <>
      <div className="image-grid w-100 mt-md-n5 px-3">
        <Header />
        <div className="image-group__container">
          {imageGroups.map((group, idx) => (
            <ImageGroup key={idx} group={group} />
          ))}
        </div>
        <MobileWorkFooter />
      </div>
    </>
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
