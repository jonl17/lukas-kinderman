import { graphql } from "gatsby"
import "./workFragment"

export const fragment = graphql`
  fragment imageGroupFragment on PrismicHomepageBodyImageGroup {
    primary {
      align
      work {
        document {
          __typename
          ...prismicWorkFragment
        }
      }
    }
    items {
      image {
        url
        alt
      }
      description {
        html
      }
    }
  }
`
