import { graphql } from "gatsby"
import "./workFragment"

export const fragment = graphql`
  fragment imageGroupFragment on PrismicHomepageBodyImageGroup {
    primary {
      align
      work {
        id
        document {
          ...prismicWorkFragment
        }
      }
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
