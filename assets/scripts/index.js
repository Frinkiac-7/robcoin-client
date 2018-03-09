'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
  $('#post-login').hide()
  $('#sign-in-form').submit(events.signIn)
  $('#sign-up-form').submit(events.signUp)
  $('#change-pw-form').submit(events.changePW)
  $('#sign-out-btn').click('button', events.signOut)
  $('#post-trans-btn').click('button', events.postTransaction)
  $('#chck-acct-blnc').click('button', events.checkBalance)
})
