import React from "react"

const TextImages = ({ images = [] }) => {
  return (
    <div>
      {images.map(({ image }, idx) => (
        <img
          key={idx}
          className="image-class"
          src={image.url}
          alt={image.alt}
        />
      ))}
    </div>
  )
}

export default TextImages
