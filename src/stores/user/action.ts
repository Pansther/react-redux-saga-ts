import type {
  FetchUserFailureActionType,
  FetchUserRequestActionType,
  FetchUserSuccessActionType,
} from "./type";
import { UserActionEnum } from "./type";
import type { User } from "../../models/user.model";

export const fetchUserRequest = (id?: string): FetchUserRequestActionType => ({
  type: UserActionEnum.REQUEST,
  payload: { id },
});

export const fetchUserFailure = (
  error: unknown
): FetchUserFailureActionType => ({
  type: UserActionEnum.FAILURE,
  payload: { error },
});

export const fetchUserSuccess = (user: User): FetchUserSuccessActionType => ({
  type: UserActionEnum.SUCCESS,
  payload: { user },
});

export const clearUser = () => ({
  type: UserActionEnum.CLEAR,
});
