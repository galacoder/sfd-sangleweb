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
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`slt-stories`],
        singleTypes: [],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
