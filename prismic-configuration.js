module.exports = {

  apiEndpoint: 'https://mandarin.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    if (doc.type == 'page' && doc.uid != 'frontpage') {
        return '/' + doc.uid;
    }
    return '/';
  }
};