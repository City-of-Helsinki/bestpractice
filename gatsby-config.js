module.exports = {
    plugins: [
      {
        resolve: 'gatsby-plugin-matomo',
        options: {
          siteId: 6,
          matomoUrl: 'https://analytics.hel.ninja/',
          siteUrl: 'https://dev.hel.fi/',
        },
      },
    ],
  };
