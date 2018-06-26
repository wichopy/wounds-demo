import { call, put, fork } from 'redux-saga/effects'
import Network from './utils/network'
import * as actions from './actions'

export function fetchPatientsApi() {
  return Network.get('/patients')
    .then(res => res.data)
}


export function* getAllPatients() {
  yield put(actions.requestPatients())
  const patients = yield call(fetchPatientsApi)
  yield put(actions.receivePatients(patients))
}

export function* startup() {
  yield fork(getAllPatients)
}

// //fetch patients on app load.
export default function* root() {
  yield fork(startup)
}
