import React from "react"
import "./styles.scss"
import cn from "classnames"

const ImageGroup = ({ slice }) => {
  const { primary, fields } = slice
  const alignmentClass = {
    left: "justify-content-start",
    right: "justify-content-end",
    center: "justify-content-center",
    between: "justify-content-between",
  }
  return (
    <div
      className={`d-flex flex-wrap w-100 my-5 mx-md-n3 imageGroupWrap ${
        alignmentClass[primary.align]
      }`}
    >
      {fields &&
        fields.map((field, idx) => {
          const imageClass = fields.length > 1 ? "imageScale" : "w-75"
          return (
            <img
              key={idx}
              className={cn(imageClass, "p-1 p-md-3 image")}
              src={field.image.url}
              alt={field.image.alt}
              onMouseEnter={() => console.log(primary)}
            />
          )
        })}
    </div>
  )
}

export default ImageGroup
