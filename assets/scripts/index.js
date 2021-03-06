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
  $('#acct-trans').hide()
  $('#delete').hide()
  $('#sign-in-form').submit(events.signIn)
  $('#sign-up-form').submit(events.signUp)
  $('#change-pw-form').submit(events.changePW)
  $('#post-trans-form').submit(events.postTransaction)
  $('#del-robcoin-submit').click(events.balanceDelete)
  $('#sign-out-btn').click('button', events.signOut)
  $('#chck-acct-btn').click('button', events.checkBalance)
  $('#sign-in-cancel').click('button', events.reset)
  $('#sign-up-cancel').click('button', events.reset)
  $('#change-pw-cancel').click('button', events.reset)
  $('#post-trans-cancel').click('button', events.reset)
})
