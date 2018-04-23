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
        name: 'content'
      }
    }, 'gatsby-transformer-remark']
};
