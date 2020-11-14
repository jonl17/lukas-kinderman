import { graphql } from "gatsby"

export const fragment = graphql`
  fragment imageGroupFragment on PrismicHomepageBodyImageGroup {
    primary {
      align
      work {
        document {
          __typename
          ... on PrismicWork {
            uid
            data {
              title {
                text
              }
              subtitle {
                text
              }
            }
          }
        }
      }
    }
    items {
      image {
        url
        alt
      }
    }
  }
`
