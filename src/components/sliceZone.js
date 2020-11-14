import React from "react"
import ImageGroup from "../components/ImageGroup"

const SliceZone = ({ sliceZone }) => {
  console.log(sliceZone)
  const sliceComponents = {
    image_group: ImageGroup,
  }
  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return sliceZoneContent
}

export default SliceZone
