module.exports = {
  siteMetadata: {
    title: `Kliment Mamykin blog`,
    description: `Personal website and blog`,
    author: `Kliment Mamykin`,
    site: `https://mamykin.com`,
    disqusShortname: `mamykin-com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mamykin.com`,
        short_name: `mamykin.com`,
        start_url: `/`,
        background_color: `#396fb0`,
        theme_color: `#396fb0`,
        display: `minimal-ui`,
        icon: `src/images/avatar-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
        ],
      },
    },
    `gatsby-transformer-ipynb`, // this is a local plugin
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
