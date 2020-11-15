import "./src/styles/_lukas_kindermann.scss"
import React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)
