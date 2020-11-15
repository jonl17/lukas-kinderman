import React from "react"
import ImageGroup from "../components/ImageGroup"
import TextImages from "../components/TextImages"
import RichText from "../components/RichText"

const SliceZone = ({ body }) => {
  const sliceComponents = {
    PrismicPageBodyTextImages: TextImages,
    PrismicPageBodyRichText: RichText,
  }
  const sliceProps = slice => {
    if (slice.__typename === "PrismicPageBodyTextImages") {
      return {
        images: slice.items,
      }
    }
    if (slice.__typename === "PrismicPageBodyRichText") {
      return {
        html: slice.primary.text.html,
      }
    }
  }
  const sliceZoneContent = body.map((slice, idx) => {
    const SliceComponent = sliceComponents[slice.__typename]
    const props = sliceProps(slice)
    if (SliceComponent) {
      return <SliceComponent {...props} key={`slice-${idx}`} />
    }
    return null
  })

  return sliceZoneContent
}

export default SliceZone
