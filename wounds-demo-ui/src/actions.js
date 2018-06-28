export const RECEIVE_PATIENTS = 'RECIEVE_PATIENTS'
export const REQUEST_PATIENTS = 'REQUEST_PATIENTS'
export const SELECT_PATIENT = 'SELECT_PATIENT'
export const RETURN_TO_PATIENT_LIST = 'RETURN_TO_PATIENT_LIST'
export const REQUEST_PATIENT_WOUNDS = 'REQUEST_PATIENT_WOUNDS'
export const RECEIVE_PATIENT_WOUNDS = 'RECEIVE_PATIENT_WOUNDS'
export const REQUEST_WOUND_RESOLVE = 'REQUEST_WOUND_RESOLVE'
export const WOUND_RESOLVE_SUCCESS = 'WOUND_RESOLVE_SUCCESS'
export const WOUND_RESOLVE_FAILURE = 'WOUND_RESOLVE_FAILURE'

export const receivePatients = (patients) => {
  return {
    type: RECEIVE_PATIENTS,
    patients,
  }
}

export const requestPatients = () => {
  return {
    type: REQUEST_PATIENTS,
  }
}

export const selectPatient = patientId => {
  return {
    type: SELECT_PATIENT,
    patientId,
  }
}

export const returnToPatientList = () => {
  return {
    type: RETURN_TO_PATIENT_LIST,
  }
}

export const requestPatientWounds = (patientId) => {
  return {
    type: REQUEST_PATIENT_WOUNDS,
    patientId,
  }
}

export const receivePatientWounds = (wounds) => {
  return {
    type: RECEIVE_PATIENT_WOUNDS,
    wounds,
  }
}

export const requestWoundResolve = (resolvedWound) => {
  return {
    type: REQUEST_WOUND_RESOLVE,
    resolvedWound,
  }
}

export const woundResolveSuccess = (patchedWound) => {
  return {
    type: WOUND_RESOLVE_SUCCESS,
    patchedWound
  }
}

export const woundResolveFailure = () => {
  return {
    type: WOUND_RESOLVE_FAILURE,
  }
}
