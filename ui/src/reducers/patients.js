import {
  REQUEST_PATIENTS,
  RECEIVE_PATIENTS,
  SELECT_PATIENT,
  RETURN_TO_PATIENT_LIST,
} from '../actions'

export const patients = (
  state = {
    isFetching: false,
    items: [],
    selectedPatient: undefined
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PATIENTS:
      return { ...state, isFetching: true };

    case RECEIVE_PATIENTS:
      return {
        ...state,
        isFetching: false,
        items: action.patients
      };

    case SELECT_PATIENT:
      const selectedPatient = state.items.find(
        patient => patient.id === action.patientId
      );
      return { ...state, selectedPatient };

    case RETURN_TO_PATIENT_LIST:
      return { ...state, selectedPatient: undefined };

    default:
      return state;
  }
};
