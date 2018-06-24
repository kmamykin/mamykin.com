module.exports = {
  siteMetadata: {
    title: 'Kliment Mamykin personal website',
    author: 'Kliment Mamykin',
    siteUrl: 'https://www.mamykin.com',
    description: 'Personal site',
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
