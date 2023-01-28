/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

const { htmlSerializer } = require("./src/prismic/htmlSerializer")

module.exports = {
  siteMetadata: {
    title: "Lukas Kinderman",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        linkResolver: ({ node, key, value }) => doc => {
          // URL for a work type
          if (doc.type === "Work") {
            return `/work/${doc.uid}`
          }
          // URL for a page type
          if (doc.type === "page") {
            return `/${doc.uid}`
          }
          // Backup for all other types
          return "/"
        },
        fetchLinks: [
          // Your list of links
        ],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => htmlSerializer(element, content),
        schemas: {
          homepage: require(`./src/prismic/schemas/homepage.json`),
          page: require(`./src/prismic/schemas/page.json`),
          work: require(`./src/prismic/schemas/work.json`),
          footer: require("./src/prismic/schemas/footer.json"),
        },
        lang: "*",
        prismicToolbar: true,
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
        },
      },
    },
  ],
}
