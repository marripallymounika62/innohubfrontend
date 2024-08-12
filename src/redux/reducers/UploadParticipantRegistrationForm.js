import { ActionTypes } from "../constants/action-types";

const initialState = {
  newParticipant: [],
};

export const UploadParticipant = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPLOAD_PARTICIPANT:
      return { ...state, newParticipant: payload };
    default:
      return state;
  }
};
