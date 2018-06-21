module.exports = {
  siteMetadata: {
    title: 'Kliment Mamykin',
    siteUrl: 'https://www.mamykin.com',
    description: 'Personal site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
