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
    <div className={`d-flex w-100 my-5 mx-n3 ${alignmentClass[primary.align]}`}>
      {fields &&
        fields.map((field, idx) => {
          const imageClass = fields.length > 1 ? "w-25" : "w-75"
          return (
            <img
              key={idx}
              className={cn(imageClass, "p-3 image")}
              src={field.image.url}
            />
          )
        })}
    </div>
  )
}

export default ImageGroup
