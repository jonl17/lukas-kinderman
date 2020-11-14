import { graphql as gl } from "gatsby"

export const fragment = gl`
fragment prismicWorkFragment on PrismicWork {
  uid
  data {
    title {
      text
    }
    description {
      html
    }
  }
}
`
