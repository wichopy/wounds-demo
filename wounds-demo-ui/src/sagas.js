import { takeEvery, call, put } from 'redux-saga/effects'
import Network from './utils/network'

export function* watchGetPatients() {
  yield takeEvery(actions.GET_ALL_PATIENTS, getAllPatients)
}

export function* getAllPatients() {
  const patients = yield call(
    Network
      .get("http://localhost:3000/patients")
      .then(res => res.data )
  )
  yield put(actions.RECIEVE_PATIENTS(patients))
}
