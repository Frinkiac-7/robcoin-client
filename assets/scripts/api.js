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
  console.log('checkBalance invoked')
  return $.ajax({
    url: config.apiOrigin + '/balances/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.account = data
      console.log('in checkBalance, store.account is', store.account)
      console.log('in checkBalance, data is', data)
      return data
    }
  })
}

const postTransaction = function (data) {
  event.preventDefault()
  store.transaction = data.transaction
  if (store.transaction.type === 'false') {
    $('#post-trans-status').text('Form requires a transaction type.  Please choose one from the list.')
  } else {
    let delta = ''
    if (store.transaction.type === 'deposit') {
      delta = store.account.balance.balance + Number(store.transaction.amount)
      console.log('deposit selected, delta is', delta)
    } else if (store.transaction.type === 'withdrawal') {
      delta = store.account.balance.balance - Number(store.transaction.amount)
      console.log('withdrawal selected, delta is', delta)
    }
    return $.ajax({
      url: config.apiOrigin + '/balances/' + store.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token,
        contentType: 'application/json'
      },
      data: {
        'balance': {
          'balance': delta
        }
      }
    })
  }
}

module.exports = {
  signIn,
  signUp,
  signOut,
  changePW,
  initNewAcct,
  checkBalance,
  postTransaction
}
