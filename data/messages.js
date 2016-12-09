module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Yours was aight, but I\'m down! Send me a track!',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Michael',
      avatar: 'https://facebook.github.io/react/img/logo_og.png',
    },
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
        _id: Math.round(Math.random() * 1000000),
    text: 'Hey Michael! Your video is like sooooo good we like need to collab like, right now!',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
];
