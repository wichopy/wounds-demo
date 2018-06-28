import { fork } from 'redux-saga/effects'

import { getPatientWounds, resolveWound } from './wounds'
import { getAllPatients } from './patients'

export function* startup() {
  yield fork(getAllPatients)
}

export default function* root() {
  yield fork(startup)
  yield fork(getPatientWounds)
  yield fork(resolveWound)
}

