import { takeEvery, take, call, put, fork, select } from 'redux-saga/effects'
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


export function fetchWoundsApi(patientId) {
  return Network.get(`/patients/${patientId}/wounds`)
    .then(res => res.data)
}

export function* fetchWounds(patientId) {
  yield put(actions.requestPatientWounds())
  const wounds = yield call(fetchWoundsApi, patientId)
  yield put(actions.receivePatientWounds(wounds))
}

// Fetch wounds when a patient is selected
export function* getPatientWounds() {
  while(true) {
    let { patientId } = yield take(actions.SELECT_PATIENT)
    yield fork(fetchWounds, patientId)
  }
}

// //fetch patients on app load.
export default function* root() {
  yield fork(startup)
  yield fork(getPatientWounds)
}

