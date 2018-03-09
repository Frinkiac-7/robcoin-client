'use strict'

const getFormFields = require('../../lib/get-form-fields')
// const store = require('./store')
const api = require('./api')
const ui = require('./ui')

// Sign-in functions
const signIn = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.credentials.email === '' && userForm.credentials.password === '') {
    $('#sign-in-status').text('Email address and password fields can\'t be blank.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    $('#sign-in-status').text('Email can\'t be blank.  Please enter an email address.')
    $('#sign-in-form')[0].reset()
  } else if (userForm.credentials.password === '') {
    $('#sign-in-status').text('Password can\'t be blank.  Please enter a password.')
    $('#sign-in-form')[0].reset()
  } else {
    api.signIn(userForm)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  }
}

const signUp = function (event) {
  event.preventDefault()
  const userForm = getFormFields(this)
  if (userForm.credentials.password !== userForm.credentials.password_confirmation) {
    $('#sign-up-status').text('Your passwords didn\'t match. Please try again')
    $('#sign-up-form')[0].reset()
  } else if (userForm.credentials.email === '') {
    $('#sign-up-status').text('The email field can\'t be blank. Please try again')
    $('#sign-up-form')[0].reset()
  } else {
    api.signUp(userForm)
      .then(ui.signUpSuccess)
      .then(api.initNewAcct)
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
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(console.error)
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePW
}
