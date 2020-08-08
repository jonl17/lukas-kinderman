import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/sliceZone"

export default ({ data }) => {
  const prismicContent = data.prismic.allHomepages.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node
  return (
    <div className="image-grid w-100 mt-md-n5">
      <SliceZone sliceZone={document.body} />
    </div>
  )
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyImage_group {
                type
                primary {
                  align
                }
                fields {
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`
