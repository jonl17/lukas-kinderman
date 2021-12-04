import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import { Link } from "gatsby"
import "./styles.scss"
import Img from "gatsby-image"

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
      const imageClass = group.images.length > 1 ? "w-25" : "w-75"
      return (
        <div
          key={idx}
          className={cn(imageClass, "p-1 image")}
          onMouseEnter={() => updateTheHeader(item.description.html)}
          onMouseLeave={() => updateTheHeader("<p>Lukas Kindermann</p>")}
        >
          <Img
            className="h-100"
            fluid={item.image.fluid}
            alt={item.image.alt}
          />
        </div>
      )
    })
  }

  const containerClass = `d-flex flex-row flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
    alignmentClass[group.align]
  }`

  return (
    <div className={cn(containerClass)}>
      <Images />
    </div>
  )
}

export default ImageGroup
