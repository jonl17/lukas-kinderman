import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import "./styles.scss"
import WorkHeaderContent from "../../components/WorkHeaderContent"
import SliceZone from "../../components/sliceZone"
import "../../prismic/fragments/workFragment"
import ExitButton from "../../components/ExitButton"

const Work = ({ data }) => {
  if (!data) return null
  const { title, subtitle, description } = data.prismicWork.data
  return (
    <div className="mx-3 mt-4">
      <ExitButton />
      <div
        className="work__description"
        dangerouslySetInnerHTML={{ __html: subtitle.html }}
      />
      {/* <SliceZone /> */}
    </div>
  )
}

export default Work

export const query = graphql`
  query($id: String!) {
    prismicWork(id: { eq: $id }) {
      ...prismicWorkFragment
    }
  }
`
