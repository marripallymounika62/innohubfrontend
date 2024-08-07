import { ActionTypes } from "../constants/action-types";

const initialState = {
    eventById: []
}

const FetchEventById = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_EVENT_BY_ID:
      return { ...state, eventById: payload }
    default:
      return state;
  }
}

export default FetchEventById;
