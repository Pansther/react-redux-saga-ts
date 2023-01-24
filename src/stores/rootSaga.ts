import { all, fork } from "@redux-saga/core/effects";

import userSaga from "./user/saga";

function* rootSaga() {
  yield all([fork(userSaga)]);
}

export default rootSaga;
