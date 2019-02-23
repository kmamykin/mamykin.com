module.exports = {
  siteMetadata: {
    title: 'Kliment Mamykin',
    author: 'Kliment Mamykin',
    siteUrl: 'https://www.mamykin.com',
    description: 'Kliment Mamykin personal site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-ipynb',
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
  ],
}
