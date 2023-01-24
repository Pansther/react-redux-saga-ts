import axios from "axios";
import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import { fetchUserSuccess, fetchUserFailure } from "./action";

import type { User } from "../../models/user.model";
import { type FetchUserRequestActionType, UserActionEnum } from "./type";

const fetchUser = async (id?: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500, 1));
  return (
    await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id ?? "1"}`
    )
  ).data;
};

function* fetchUserSaga(action: FetchUserRequestActionType) {
  try {
    const user: User = yield call(fetchUser, action.payload?.id);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* watchFetchUserSaga() {
  yield takeLatest(UserActionEnum.REQUEST, fetchUserSaga);
}

function* userSaga() {
  yield all([watchFetchUserSaga()]);
}

export default userSaga;
