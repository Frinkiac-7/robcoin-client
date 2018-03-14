'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign-in functions
const signIn = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.signIn(userForm)
    .then(ui.signInSuccess)
    .then(api.getAcctStatus)
    // .then(api.checkBalance)
    .catch(ui.signInFailure)
}

const balanceDelete = function () {
  event.preventDefault()
  api.balanceDelete()
    .then(ui.onBalanceDeleteSuccess)
    // .catch(console.error())
}
const signUp = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.credentials.password !== userForm.credentials.password_confirmation) {
    $('#sign-up-status').text('Your passwords didn\'t match. Please try again')
    $('#sign-up-form')[0].reset()
  } else {
    api.signUp(userForm)
      .then(ui.signUpSuccess)
      // .then(initNewAcct())
      // .catch(ui.signUpFailure)
      // .catch(console.error())
  }
}

const changePW = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.changePW(userForm)
    .then(ui.changePWSuccess)
    // .catch(console.error())
}

const signOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    // .catch(console.error)
}

const initNewAcct = function () {
  api.initNewAcct()
    .then(ui.initNewAcctSuccess)
}
const postTransaction = function (event) {
  event.preventDefault()
  // $('#trans-submit').attr('disabled', 'disabled')
  const userForm = getFormFields(this)
  api.postTransaction(userForm)
    .then(api.checkBalance)
    .then(ui.onPostTransactionSuccess)
}

const checkBalance = function () {
  event.preventDefault()
  api.checkBalance()
    .then(ui.displayBalance())
}

const reset = function () {
  $('#sign-in-form')[0].reset()
  $('#sign-in-status').text('')
  $('#sign-up-form')[0].reset()
  $('#sign-up-status').text('')
  $('#change-pw-form')[0].reset()
  $('#change-pw-status').text('')
  $('#post-trans-form')[0].reset()
  $('#post-trans-status').text('')
}
module.exports = {
  signIn,
  signUp,
  signOut,
  changePW,
  postTransaction,
  checkBalance,
  initNewAcct,
  balanceDelete,
  reset
}
