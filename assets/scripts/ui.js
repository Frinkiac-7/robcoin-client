const store = require('./store')
const api = require('./api')

// Sign-in functions
const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form')[0].reset()
  console.log('store.user is', store.user)
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#acct-trans').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
  $('#user-status').text('Welcome ' + store.user.email + '!')
}

const signInFailure = function (data) {
  $('#sign-in-status').text('Login was unsuccessful.  Please try again or sign up for an account.')
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
  $('#acct-trans').slideUp('slow')
  $('#post-login').slideUp('slow')
  $('#pre-login').slideDown('slow')
  $('#user-status').text('No user signed in')
}

const changePWSuccess = function (data) {
  console.log('changePWSuccess invoked')
  $('#change-pw-form')[0].reset()
  $('#change-pw-modal').modal('toggle')
  $('#user-status').text('Password for ' + store.user.email + 'successfully changed!')
}

const displayBalance = function () {
  $('#acct-id').text(store.account.id)
  $('#acct-blnc').text(store.account.balance.balance)
  $('#user-status').text(store.user.email + '\'s balance is ' + store.account.balance.balance)
}

const onPostTransactionSuccess = function () {
  console.log('ui.onPostTransactionSuccess invoked')
  $('#post-trans-form')[0].reset()
  $('#post-trans').modal('toggle')
  $('#user-status').text(store.user.email + '\'s balance has changed.  Click Check Balance to see your account balance.')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  changePWSuccess,
  displayBalance,
  onPostTransactionSuccess
}
