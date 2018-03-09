const config = require('./config')
const store = require('./store')

// Sign-in functions
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePW = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const initNewAcct = function () {
  const data = {
    'balance': {
      'user_id': store.user.id,
      'balance': 500
    }
  }
  return $.ajax({
    url: config.apiOrigin + '/balances',
    method: 'POST',
    headers: {
      contentType: 'applications/json'
    },
    data
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePW,
  initNewAcct
}
