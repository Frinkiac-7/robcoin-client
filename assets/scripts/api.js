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

const balanceDelete = function () {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/balances/' + store.account.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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
      contentType: 'applications/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.account = data.balance
      return data
    },
    data
  })
}

const getAcctStatus = function () {
  return $.ajax({
    url: config.apiOrigin + '/balances',
    method: 'GET',
    headers: {
      contentType: 'applications/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      const length = data.balances.length
      if (length === 0) {
        initNewAcct()
      }
      store.account = data.balances[0]
    }
  })
}

const checkBalance = function () {
  return $.ajax({
    url: config.apiOrigin + '/balances/' + store.account.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    success: function (data) {
      store.account = data.balance
      return store.account
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
      delta = store.account.balance + Number(store.transaction.amount)
    } else if (store.transaction.type === 'withdrawal') {
      delta = store.account.balance - Number(store.transaction.amount)
    }
    return $.ajax({
      url: config.apiOrigin + '/balances/' + store.account.id,
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
  postTransaction,
  balanceDelete,
  getAcctStatus
}
