import { graphql } from "gatsby"
import React, { useState } from "react"
import Header from "../components/Header"
import ImageGrid from "../components/ImageGrid"
import "../prismic/fragments/imageGroupFragment"
import { PrimaryText, PrismicImageGrid, SecondaryText, Texts } from "../types"
import WorkText from "../components/WorkText"

export default ({ data }) => {
  const homepage = data.prismicHomepage

  const groups = homepage.data.body.filter(
    item => item.__typename === "PrismicHomepageBodyImageGrid"
  ) as Array<PrismicImageGrid>

  const [activeTexts, setActiveTexts] = useState<Texts>()

  const toggleActiveTexts = (text?: PrismicImageGrid["items"][0]) => {
    if (text) {
      setActiveTexts({
        primary: text.primary_text as PrimaryText,
        secondary: text.secondary_text as SecondaryText,
      })
    } else setActiveTexts(undefined)
  }

  return (
    <>
      <div className="w-100 my-5 pt-5 px-3">
        <Header />
        {groups.map((group, key) => (
          <ImageGrid
            toggleActiveTexts={toggleActiveTexts}
            key={key}
            {...group}
          />
        ))}
        <WorkText
          primary={activeTexts?.primary}
          secondary={activeTexts?.secondary}
        />
      </div>
    </>
  )
}

export const query = graphql`
  {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageBodyImageGrid {
            primary {
              container_width
              container_alignment
            }
            items {
              image {
                url
                alt
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              primary_text {
                html
              }
              secondary_text {
                html
              }
            }
          }
        }
      }
    }
  }
`
