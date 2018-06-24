import Network from './utils/network'

export const GET_ALL_PATIENTS = 'GET_ALL_PATIENTS'
export const GET_ALL_PATIENTS_ERROR = 'GET_ALL_PATIENTS_ERROR'
export const RECEIVE_PATIENTS = 'RECIEVE_PATIENTS'
export const REQUEST_PATIENTS = 'REQUEST_PATIENTS'

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
