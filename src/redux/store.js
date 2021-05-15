<<<<<<< HEAD
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
=======
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";
import { persistStore } from "redux-persist";


const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

const storeRoot = { store, persistor }
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default storeRoot