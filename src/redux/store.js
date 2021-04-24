import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";
import { persistStore } from "redux-persist";


const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

const storeRoot = { store, persistor }
export default storeRoot