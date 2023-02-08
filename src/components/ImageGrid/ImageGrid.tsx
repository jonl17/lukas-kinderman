import React from "react"
import { PrismicImageGrid } from "../../types"
import Img from "gatsby-image"

type Props = {
  toggleActiveTexts: (text?: PrismicImageGrid["items"][0]) => void
}

export default function ImageGrid({
  primary,
  items,
  toggleActiveTexts,
}: PrismicImageGrid & Props) {
  return (
    <section
      style={{ justifyContent: primary.container_alignment ?? "left" }}
      className="image-grid h-100"
    >
      {/* desktop below */}
      <div
        className="image-grid__the-grid image-grid__the-grid--desktop"
        style={{
          width: primary.container_width,
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        }}
      >
        {items.map((item, key) => (
          <span
            onMouseEnter={() => toggleActiveTexts(item)}
            onMouseLeave={() => toggleActiveTexts()}
            style={{ maxHeight: "100vh" }}
            key={key}
          >
            {/* @ts-ignore */}
            <Img
              alt={item.image.alt}
              fluid={item.image.fluid}
              style={{ objectFit: "contain", height: "100%" }}
              imgStyle={{ objectFit: "contain", maxHeight: "100vh" }}
            />
          </span>
        ))}
      </div>

      {/* mobile below */}
      <div
        className="image-grid__the-grid image-grid__the-grid--mobile"
        style={{
          width: primary.container_width,
          gridTemplateColumns: `repeat(${
            items.length > 2 ? 2 : items.length
          }, 1fr)`,
          gridTemplateRows: "repeat(auto, 1fr)",
        }}
      >
        {items.map((item, key) => (
          <span
            onClick={() => toggleActiveTexts(item)}
            style={{ maxHeight: "100vh" }}
            key={key}
          >
            {/* @ts-ignore */}
            <Img
              alt={item.image.alt}
              fluid={item.image.fluid}
              style={{ objectFit: "contain" }}
              imgStyle={{ objectFit: "contain", maxHeight: "100vh" }}
            />
          </span>
        ))}
      </div>
    </section>
  )
}
