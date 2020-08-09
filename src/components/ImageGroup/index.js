import React, { useContext } from "react"
import { LayoutContext } from "../../layouts"
import cn from "classnames"
import "./styles.scss"

const ImageGroup = ({ slice }) => {
  const { primary, fields } = slice
  const alignmentClass = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
    between: "justify-content-between",
  }

  const { setPageTitle } = useContext(LayoutContext)

  const handleImgHover = () => {
    if (primary.work) {
      setPageTitle(primary.work.title[0].text)
    }
  }

  return (
    <div
      className={`d-flex flex-wrap w-100 my-5 mx-md-n1 imageGroupWrap ${
        alignmentClass[primary.align]
      }`}
    >
      {fields &&
        fields.map((field, idx) => {
          const imageClass = fields.length > 1 ? "imageScale" : "w-75"
          return (
            <img
              key={idx}
              className={cn(imageClass, "p-1 image")}
              src={field.image.url}
              alt={field.image.alt}
              onMouseEnter={() =>
                primary.work && setPageTitle(primary.work.title[0].text)
              }
              onMouseLeave={() => setPageTitle("Lukas Kinderman")}
            />
          )
        })}
    </div>
  )
}

export default ImageGroup
