module.exports = {
  siteMetadata: {
    title: 'Square Education',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: 'SquareDB',
        //collection: [`enquiries`,`posts`,`users`,`postcategories`],
        collection: [`displaycategories`,`studentscores`],
        server: { address: `localhost`, port: `27017` },
      },
    },
  ],
}
