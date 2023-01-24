import type { UserActions } from "./type";
import type { User } from "../../models/user.model";

export interface UserStateType {
  user?: User;
  error?: unknown;
  pending: boolean;
}

const initialState: UserStateType = {
  pending: false,
  user: undefined,
  error: undefined,
};

export default (state = initialState, action: UserActions): UserStateType => {
  switch (action.type) {
    case "CLEAR_USER":
      return { ...state, user: undefined };
    case "FETCH_USER_REQUEST":
      return { ...state, pending: true };
    case "FETCH_USER_FAILURE":
      return { ...state, pending: false, error: action.payload.error };
    case "FETCH_USER_SUCCESS":
      return { ...state, pending: false, user: action.payload.user };
    default:
      return { ...state };
  }
};
