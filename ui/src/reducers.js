import {
  REQUEST_PATIENTS,
  RECEIVE_PATIENTS,
  SELECT_PATIENT,
  RETURN_TO_PATIENT_LIST,
  REQUEST_PATIENT_WOUNDS,
  RECEIVE_PATIENT_WOUNDS,
  REQUEST_WOUND_RESOLVE,
  WOUND_RESOLVE_SUCCESS,
  WOUND_RESOLVE_FAILURE,
} from "./actions";
import { combineReducers } from "redux";

const patients = (
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

const wounds = (
  state = {
    isFetching: false,
    isPatching: false,
    items: [],
    patchError: false,
    patchSuccess: false,
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PATIENT_WOUNDS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PATIENT_WOUNDS:
      return {
        ...state,
        isFetching: false,
        items: action.wounds
      };
    case RETURN_TO_PATIENT_LIST:
      return {
        ...state,
        items: []
      };
    case REQUEST_WOUND_RESOLVE:
      return {
        ...state,
        isPatching: true,
      };
    case WOUND_RESOLVE_SUCCESS:
      const { patchedWound } = action
      const index = state.items.findIndex(wound => wound.id === patchedWound.id)
      const nextItems = [...state.items]
      nextItems[index] = patchedWound

      return {
        ...state,
        isPatching: false,
        patchSuccess: true,
        items: nextItems,
      }
    case WOUND_RESOLVE_FAILURE:
      return {
        ...state,
        isPatching: false,
        patchError: true,
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  patients,
  wounds
});

export default rootReducer;
