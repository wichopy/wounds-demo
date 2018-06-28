import {
  RETURN_TO_PATIENT_LIST,
  REQUEST_PATIENT_WOUNDS,
  RECEIVE_PATIENT_WOUNDS,
  REQUEST_WOUND_RESOLVE,
  WOUND_RESOLVE_SUCCESS,
  WOUND_RESOLVE_FAILURE,
} from '../actions'

export const wounds = (
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
