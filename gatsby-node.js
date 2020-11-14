const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const works = await graphql(`
    {
      allPrismicWork {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const pageTemplate = path.resolve(__dirname, `src/templates/Page/index.js`)
  const workTemplate = path.resolve(__dirname, `src/templates/Work/index.js`)

  pages.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    })
  })

  works.data.allPrismicWork.nodes.forEach(node => {
    createPage({
      path: `/work/${node.uid}`,
      component: workTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
