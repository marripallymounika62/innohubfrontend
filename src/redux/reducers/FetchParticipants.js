import { ActionTypes } from "../constants/action-types";

const initialState = {
    participants: [],
};

export const FetchParticipants = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PARTICIPANT:
      return { ...state, participants: payload };
    default:
      return state;
  }
};