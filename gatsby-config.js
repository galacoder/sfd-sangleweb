module.exports = {
  siteMetadata: {
    title: `Sang Le Tech`,
    description: `VƯƠN TẦM BẢN THÂN. BƯỚC ĐI TỰ TIN TRÊN HÀNH TRÌNH 4.0`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
