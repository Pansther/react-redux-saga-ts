import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  userStore: userReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
