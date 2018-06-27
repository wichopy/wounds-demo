// import ACTIONS
import {
  REQUEST_PATIENTS,
  RECEIVE_PATIENTS,
  // SELECT_PATIENT
} from './actions'
import { combineReducers } from 'redux'

const patients = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PATIENTS:
      return { ...state, isFetching: true }

    case RECEIVE_PATIENTS:
      return {
        ...state,
        isFetching: false,
        items: action.patients
      }
    default:
      return state
  }
}

// const selectedPatient = (
//   state = {
//     patientId: undefined
//   },
//   action
// ) => {
//   switch (action.type) {
//     case SELECT_PATIENT:
//       return {...state, patientId: action.patientId }

//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  // selectedPatient,
  patients,
})

export default rootReducer
