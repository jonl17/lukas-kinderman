import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const result = useStaticQuery(graphql`
    {
      prismicFooter {
        data {
          contact {
            html
          }
          address {
            html
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div
        dangerouslySetInnerHTML={{
          __html: result.prismicFooter.data.contact.html,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: result.prismicFooter.data.address.html,
        }}
      />
    </footer>
  )
}
