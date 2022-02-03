const config = require('./src/data/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`
        }
      }
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'LDU',
        start_url: '/',
        theme_color: 'white',
        background_color: 'white',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
