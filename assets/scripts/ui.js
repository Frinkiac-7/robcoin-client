const store = require('./store')

// Sign-in functions
const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form')[0].reset()
  console.log('store.user is', store.user)
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#acct-trans').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
}

const signInFailure = function (data) {
  $('#sign-in-status').text('You done fucked up, son.  Please try again.')
  $('#sign-in-form')[0].reset()
}
// Sign-up functions
const signUpSuccess = function (data) {
  store.user = data.user
  $('#sign-up-form')[0].reset()
  $('#sign-up-status').text('User ' + data.user.email + ' account created with bank account #TO_DO')
  console.log('store.user is', store.user)
  // $('#pre-login').slideUp('slow')
  // $('#post-login').slideDown('slow')
  // $('#sign-up-modal').modal('toggle')
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

const displayBalance = function () {
  $('#acct-id').text(store.account.id)
  $('#acct-blnc').text(store.account.balance)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePWSuccess,
  displayBalance
}
