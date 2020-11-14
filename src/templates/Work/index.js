import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import "./styles.scss"
import WorkHeaderContent from "../../components/WorkHeaderContent"
import { LayoutContext } from "../../layouts"

const Work = ({ data }) => {
  const { setHeaderContent } = useContext(LayoutContext)
  useEffect(() => {
    setHeaderContent(
      <WorkHeaderContent
        title={data.prismicWork.data.title.text}
        subtitle={data.prismicWork.data.subtitle.text}
      />
    )
  }, [data, setHeaderContent])
  return <p>{data.prismicWork.data.title.text}</p>
}

export default Work

export const query = graphql`
  query($id: String!) {
    prismicWork(id: { eq: $id }) {
      data {
        title {
          text
        }
        subtitle {
          html
        }
      }
    }
  }
`
