import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import "./styles.scss"
import WorkHeaderContent from "../../components/WorkHeaderContent"
import { LayoutContext } from "../../layouts"
import "../../prismic/fragments/workFragment"

const Work = ({ data }) => {
  return <p>{data.prismicWork.data.title.text}</p>
}

export default Work

export const query = graphql`
  query($id: String!) {
    prismicWork(id: { eq: $id }) {
      ...prismicWorkFragment
    }
  }
`
