import { FluidObject } from "gatsby-image"

export type ImageType = {
  alt: string
  url: string
  fluid: FluidObject
}

export type PrismicImageGrid = {
  primary: {
    container_width: "25%" | "50%" | "75%" | "100%"
    container_alignment: "left" | "center" | "right"
  }
  items: Array<{
    image: ImageType
    primary_text: {
      html?: string
    }
    secondary_text: {
      html?: string
    }
  }>
}

export type PrimaryText = Pick<
  PrismicImageGrid["items"][0],
  "primary_text"
>["primary_text"]
export type SecondaryText = Pick<
  PrismicImageGrid["items"][0],
  "secondary_text"
>["secondary_text"]
export type Texts = {
  primary?: PrimaryText
  secondary?: SecondaryText
}
