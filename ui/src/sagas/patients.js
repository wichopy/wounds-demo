import { call, put } from 'redux-saga/effects'
import Network from '../utils/network'
import * as actions from '../actions'

function fetchPatientsApi() {
  return Network.get('/patients')
    .then(res => res.data)
}


export function* getAllPatients() {
  yield put(actions.requestPatients())
  const patients = yield call(fetchPatientsApi)
  yield put(actions.receivePatients(patients))
}
