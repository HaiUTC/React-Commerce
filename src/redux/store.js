import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import { persistStore } from "redux-persist";
import reducer from "./reducer";
import rootSaga from './root-sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger,sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

const storeRoot = { store, persistor }

export default storeRoot