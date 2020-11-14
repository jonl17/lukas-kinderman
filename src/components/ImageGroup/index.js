import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import Link from "../Link"
import "./styles.scss"

const ImageGroup = ({ slice }) => {
  const { primary, items } = slice
  const alignmentClass = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
    between: "justify-content-between",
  }

  const { setHeaderContent, DEFAULT_HEADER_CONTENT } = useContext(LayoutContext)
  console.log(items)
  const Images = () => {
    return items.map((item, idx) => {
      const imageClass = items.length > 1 ? "imageScale" : "w-75"
      return (
        <Link
          key={idx}
          to={
            primary.work.document ? `/work/${primary.work.document.uid}` : null
          }
          title={
            primary.work.document ? primary.work.document.data.title.text : null
          }
          subtitle={
            primary.work ? primary.work.document.data.description.html : null
          }
          style={{ display: "contents" }}
        >
          <img
            key={idx}
            className={cn(imageClass, "p-1 image")}
            src={item.image.url}
            alt={item.image.alt}
          />
        </Link>
      )
    })
  }

  const containerClass = `d-flex flex-row flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
    alignmentClass[primary.align]
  }`
  return <div className={containerClass}>{items && <Images />}</div>
}

export default ImageGroup
