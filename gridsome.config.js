// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Code Hamp',
  plugins: [ 
    {
    use: '@gridsome/source-wordpress',
    options: {
      baseUrl: 'http://f21a9b4f9de6.ngrok.io/', // required
      apiBase: 'wp-json',
      typeName: 'WordPress',
      perPage: 100,
      concurrent: 10
      }
    }
  ],
  templates: {
    WordPressPost: '/:year/:month/:day/:slug'
  }

}