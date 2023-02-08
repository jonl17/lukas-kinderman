import { graphql } from "gatsby"
import "./workFragment"

export const fragment = graphql`
  fragment imageGroupFragment on PrismicHomepageBodyImageGroup {
    primary {
      align
    }
    items {
      image {
        url
        alt
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      description {
        html
      }
    }
  }
`
