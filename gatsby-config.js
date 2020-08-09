/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "lukas-kinderman",
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        pages: [
          {
            type: "Work",
            match: "/work/:uid",
            component: require.resolve("./src/templates/Work"),
          },
        ],
      },
    },
  ],
}
