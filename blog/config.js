'use strict';

module.exports = {
  // url: 'https://lumen.netlify.com',
  url: 'https://leeveronica.github.io/',
  // Adding Gatsby blog to existing site - https://github.com/gatsbyjs/gatsby/issues/16664
  // Adding Path Prefix - https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/
  pathPrefix: '/blog',
  title: 'Blog by Veronica Lee',
  subtitle: 'Business-oriented data scientist for future cities',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-137749891-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Veronica Lee',
    photo: '/photo.jpg',
    bio: 'Business-oriented data scientist for future cities',
    contacts: {
      email: 'veronica.sm.lee@gmail.com',
      facebook: '#',
      telegram: '#',
      twitter: '#',
      github: 'leeveronica',
      rss: '',
      vkontakte: '',
      linkedin: 'leeveronica',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  }
};
