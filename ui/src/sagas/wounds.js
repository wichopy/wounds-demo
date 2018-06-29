import { take, call, put, fork } from "redux-saga/effects";
import Network from "../utils/network";
import * as actions from "../actions";

function fetchWoundsApi(patientId) {
  return Network
    .get(`/patients/${patientId}/wounds`)
    .then(res => res.data);
    // TODO: Handle error
}

function* fetchWounds(patientId) {
  yield put(actions.requestPatientWounds());
  const wounds = yield call(fetchWoundsApi, patientId);
  yield put(actions.receivePatientWounds(wounds));
}

export function* getPatientWounds() {
  while (true) {
    let { patientId } = yield take(actions.SELECT_PATIENT);
    yield fork(fetchWounds, patientId);
  }
}

function patchWoundApi(resolvedWound) {
  const woundId = resolvedWound.woundId;
  const payload = { data: resolvedWound.resolvedWound };

  return Network.patch(`/wounds/${woundId}`, payload);
  // TODO: Handle error with `WOUND_RESOLVE_FAILURE` action
}

function* patchWound(resolvedWound) {
  const patchedWound = yield call(patchWoundApi, resolvedWound);
  yield put(actions.woundResolveSuccess(patchedWound));
}

export function* resolveWound() {
  while (true) {
    let { resolvedWound } = yield take(actions.REQUEST_WOUND_RESOLVE);
    yield fork(patchWound, resolvedWound);
  }
}
