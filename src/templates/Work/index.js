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
        title={data.prismic.work.title[0].text}
        subtitle={data.prismic.work.subtitle[0].text}
      />
    )
  }, [data, setHeaderContent])
  return <p>{data.prismic.work.title[0].text}</p>
}

export default Work

export const query = graphql`
  query($uid: String!) {
    prismic {
      work(lang: "en-us", uid: $uid) {
        title
        subtitle
      }
    }
  }
`
