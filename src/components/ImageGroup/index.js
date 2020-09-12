import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import Link from "../Link"
import "./styles.scss"

const ImageGroup = ({ slice }) => {
  const { primary, fields } = slice
  const alignmentClass = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
    between: "justify-content-between",
  }

  const { setHeaderContent, DEFAULT_HEADER_CONTENT } = useContext(LayoutContext)

  const Images = () => {
    return fields.map((field, idx) => {
      const imageClass = fields.length > 1 ? "imageScale" : "w-75"
      return (
        <img
          key={idx}
          className={cn(imageClass, "p-1 image")}
          src={field.image.url}
          alt={field.image.alt}
        />
      )
    })
  }

  const containerClass = `d-inline-flex flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
    alignmentClass[primary.align]
  }`
  return (
    <Link
      to={primary.work ? `/work/${primary.work._meta.uid}` : null}
      containerClass={containerClass}
      title={primary.work ? primary.work.title[0].text : null}
      subtitle={primary.work ? primary.work.subtitle[0].text : null}
    >
      {fields && <Images />}
    </Link>
  )
}

export default ImageGroup
