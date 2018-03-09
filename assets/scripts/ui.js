const store = require('./store')

// Sign-in functions
const signInSuccess = function (data) {
  store.user = data.user
  // $('#message').text('User ' + data.user.email + ' is signed in.')
  console.log('User ' + data.user.email + ' is signed in!')
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
  $('#sign-in-form')[0].reset()
}

const signUpSuccess = function (data) {
  store.user = data.user
  // $('#message').text('User ' + data.user.email + ' is signed in.')
  console.log('User ' + data.user.email + ' is signed in!')
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-form')[0].reset()
}

module.exports = {
  signInSuccess,
  signUpSuccess
}
