import { call } from 'redux-saga/effects'

function* fetchProducts() {
  const products = yield(Api.fetch, '/products')
  // ...
}

//Test

import { call } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

//expects a call instruction

assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchPRoducts should yield an Effect call(Api.fetch, '/products')"
)
