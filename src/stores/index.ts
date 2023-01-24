import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, legacy_createStore as createStore } from "redux";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, logger)
);

sagaMiddleWare.run(rootSaga);
