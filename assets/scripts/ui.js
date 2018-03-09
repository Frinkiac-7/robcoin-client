const store = require('./store')

// Sign-in functions
const signInSuccess = function (data) {
  store.user = data.user
  console.log('store.user is', store.user)
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
  $('#sign-in-form')[0].reset()
}

const signInFailure = function (data) {
  $('#sign-in-status').text('You done fucked up, son.  Please try again.')
  $('#sign-in-form')[0].reset()
}
// Sign-up functions
const signUpSuccess = function (data) {
  store.user = data.user
  // $('#message').text('User ' + data.user.email + ' is signed in.')
  console.log('store.user is', store.user)
  // $('#pre-login').slideUp('slow')
  // $('#post-login').slideDown('slow')
  // $('#sign-up-modal').modal('toggle')
  $('#sign-in-form')[0].reset()
  $('#sign-up-status').text('YAY!  You\'ve created an account!')
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-modal').modal('toggle')
}

const signUpFailure = function (data) {

}

const signOutSuccess = function (data) {
  $('#sign-out-modal').modal('toggle')
  $('#post-login').slideUp('slow')
  $('#pre-login').slideDown('slow')
}

const changePWSuccess = function (data) {
  console.log('changePWSuccess invoked')
  $('#change-pw-form')[0].reset()
  $('#change-pw-modal').modal('toggle')
}
module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePWSuccess
}
