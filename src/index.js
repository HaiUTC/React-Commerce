import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import App from "./App";
import "./index.css";
import storeRoot from './redux/store'

ReactDOM.render(
  <Provider store = {storeRoot.store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={storeRoot.persistor}>
        <App />
        </PersistGate>
        
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
