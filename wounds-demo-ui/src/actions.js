export const RECEIVE_PATIENTS = 'RECIEVE_PATIENTS'
export const REQUEST_PATIENTS = 'REQUEST_PATIENTS'
export const SELECT_PATIENT = 'SELECT_PATIENT'

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
