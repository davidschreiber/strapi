module.exports = {
    routes: [
      { 
        method: 'GET',
        path: '/motivational-messages/random', 
        handler: 'motivational-message.random',
      },
    ]
  }