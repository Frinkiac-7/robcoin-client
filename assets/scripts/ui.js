const store = require('./store')

// Sign-in functions
const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form')[0].reset()
  $('#sign-in-status').text('')
  $('#pre-login').slideUp('slow')
  $('#post-login').slideDown('slow')
  $('#acct-trans').slideDown('slow')
  $('#delete').slideDown('slow')
  $('#sign-in-modal').modal('toggle')
  $('#user-status').text('Welcome ' + store.user.email + '!')
}

const initNewAcctSuccess = function () {
  $('#user-status').text('Welcome ' + store.user.email + '!  A deposit of 500 Robcoins has been made to your account!')
}

const signInFailure = function (data) {
  $('#sign-in-status').text('Login was unsuccessful.  Please try again or sign up for an account.')
  $('#sign-in-form')[0].reset()
}
// Sign-up functions
const signUpSuccess = function (data) {
  store.user = data.user
  store.status = 'new'
  $('#sign-up-form')[0].reset()
  $('#sign-up-status').text('')
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-modal').modal('toggle')
  $('#sign-in-status').text('Welcome! When you log in with your new user account it will also set up your bank account with 500 Robcoins!  Easy peasy, isn\'t it?!')
  return store.status
}

const onBalanceDeleteSuccess = function () {
  $('#del-robcoin').modal('toggle')
  $('#acct-trans').slideUp('slow')
  $('#delete').slideUp('slow')
  $('#user-status').text('Your account balance has been deleted.  Sign in to get another 500 free Robcoin.')
}

const signUpFailure = function (data) {

}

const signOutSuccess = function (data) {
  $('#sign-out-modal').modal('toggle')
  $('#delete').slideUp('slow')
  $('#acct-trans').slideUp('slow')
  $('#post-login').slideUp('slow')
  $('#pre-login').slideDown('slow')
  $('#user-status').text('No user signed in')
}

const changePWSuccess = function (data) {
  $('#change-pw-form')[0].reset()
  $('#change-pw-modal').modal('toggle')
  $('#user-status').text('Password for ' + store.user.email + 'successfully changed!')
}

const displayBalance = function (data) {
  $('#acct-id').text(store.account.id)
  $('#acct-blnc').text(store.account.balance)
  $('#user-status').text(store.user.email + '\'s balance is $' + store.account.balance)
}

const onPostTransactionSuccess = function () {
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
  onPostTransactionSuccess,
  onBalanceDeleteSuccess,
  initNewAcctSuccess
}
