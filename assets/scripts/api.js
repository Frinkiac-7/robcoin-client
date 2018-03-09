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
    success: function (data) {
      console.log('data is', data)
      store.account = data
      console.log('store.account is', store.account)
      return data
    },
    data
  })
}

const checkBalance = function () {
  return $.ajax({
    url: config.apiOrigin + '/balances/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.account = data.balance
      console.log('data is', data)
      console.log('balance from data.balance.balance is ', data.balance.balance)
      console.log('store.account is', store.account)
      console.log('balance from store.account.balance is ', store.account.balance)
      return data
    }
  })
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePW,
  initNewAcct,
  checkBalance
}
