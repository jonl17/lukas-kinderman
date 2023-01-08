import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useInView } from "../../hooks/useInView"

const ImageGroup = ({ group }) => {
  const alignmentClass = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
    between: "justify-content-between",
  }

  const { updateTheHeader } = useContext(LayoutContext)

  const Images = () => {
    return group.images.map((item, idx) => {
      const imageClass =
        group.images.length > 1 ? "image--quarter" : "image--three-quarter"
      return (
        <div
          key={idx}
          className={cn(imageClass, "p-1 image")}
          onMouseEnter={() => {
            updateTheHeader(item.description.html)
          }}
          onMouseLeave={() => updateTheHeader("<h1>Lukas Kindermann</h1>")}
        >
          <Img
            className="h-100"
            fluid={item.image.fluid}
            alt={item.image.alt}
            style={{ objectFit: "contain" }}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      )
    })
  }

  const containerClass = `d-flex flex-row flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
    alignmentClass[group.align]
  }`

  return (
    <div className={cn(containerClass, "position-relative")}>
      <Images />
    </div>
  )
}

export default ImageGroup
