import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "../src/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/argon-dashboard-react.scss";
import "../src/assets/scss/argon-dashboard-react.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import "bootstrap-icons/font/bootstrap-icons.json"
import DataState from "./states/DataState";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import UserState from "./states/UserState";


let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserState>
          <DataState>
            <BrowserRouter>
              <Switch>
                <App />
              </Switch>
            </BrowserRouter>
          </DataState>
        </UserState>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
