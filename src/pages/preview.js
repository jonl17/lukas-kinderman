import * as React from "react"
import { withPreviewResolver } from "gatsby-source-prismic"

import { linkResolver } from "../prismic/linkResolver"

import Layout from "../layouts"

const PreviewPage = ({ isPreview, isLoading }) => {
  if (isPreview === false) return "Not a preview!"

  return (
    <Layout>
      <p>Loading</p>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
  linkResolver,
})
