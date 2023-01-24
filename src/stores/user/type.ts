import type { User } from "../../models/user.model";

export enum UserActionEnum {
  CLEAR = "CLEAR_USER",
  REQUEST = "FETCH_USER_REQUEST",
  FAILURE = "FETCH_USER_FAILURE",
  SUCCESS = "FETCH_USER_SUCCESS",
}

export type UserActionType = UserActionEnum;

export interface FetchUserPayloadType {
  user: User;
}

export interface FetchUserRequestActionType {
  type: UserActionEnum.REQUEST;
  payload?: { id?: string };
}

export interface FetchUserFailureActionType {
  type: UserActionEnum.FAILURE;
  payload: { error: unknown };
}

export interface FetchUserSuccessActionType {
  type: UserActionEnum.SUCCESS;
  payload: FetchUserPayloadType;
}

export interface ClearUserActionType {
  type: UserActionEnum.CLEAR;
}

export type UserActions =
  | FetchUserRequestActionType
  | FetchUserFailureActionType
  | FetchUserSuccessActionType
  | ClearUserActionType;
