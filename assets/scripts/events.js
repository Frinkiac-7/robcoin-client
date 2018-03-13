'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

// Sign-in functions
const signIn = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  api.signIn(userForm)
    .then(ui.signInSuccess)
    // .then(api.initNewAcct)
    .then(api.checkBalance)
    .catch(ui.signInFailure)
  if (store.status === 'new') {
    api.initNewAcct()
  }
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
      // .catch(ui.signUpFailure)
      .catch(console.error())
  }
}

const changePW = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  console.log('userForm is', userForm)
  api.changePW(userForm)
    .then(ui.changePWSuccess)
    .catch(console.error())
}

const signOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(console.error)
}

const postTransaction = function (event) {
  event.preventDefault()
  // $('#trans-submit').attr('disabled', 'disabled')
  const userForm = getFormFields(this)
  console.log('postTransaction invoked. userForms is', userForm)
  console.log('in events.postTransaction BEFORE executing api.postTransaction. store.account is', store.account)
  api.postTransaction(userForm)
    .then(ui.onPostTransactionSuccess)
}

const checkBalance = function () {
  event.preventDefault()
  console.log('checkBalance invoked')
  api.checkBalance()
    .then(console.log('shit seems to have worked \' cuz data is...?'))
    .then(ui.displayBalance)
}

const reset = function () {
  console.log('test clear function invoked')
  $('#sign-in-form')[0].reset()
  $('#sign-in-status').text('')
  $('#sign-up-form')[0].reset()
  $('#sign-up-status').text('')
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
  reset
}
