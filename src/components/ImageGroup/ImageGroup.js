import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import { Link } from "gatsby"
import "./styles.scss"

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
      const imageClass = group.images.length > 1 ? "imageScale" : "w-75"
      return (
        <Link
          key={idx}
          to={`/work/${group.work.uid}`}
          style={{ display: "contents" }}
        >
          <img
            key={idx}
            className={cn(imageClass, "p-1 image")}
            src={item.image.url}
            alt={item.image.alt}
            onMouseEnter={() => updateTheHeader(item.description.html)}
            onMouseLeave={() => updateTheHeader("<p>Lukas Kindermann</p>")}
          />
        </Link>
      )
    })
  }

  const containerClass = `d-flex flex-row flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
    alignmentClass[group.align]
  }`

  return (
    <div className={containerClass}>
      <Images />
    </div>
  )
}

export default ImageGroup
