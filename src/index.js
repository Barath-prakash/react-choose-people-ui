import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import rootReducer from "./rootReducer";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();
const reduxStore = createStore(
   /*rootReducer,*/
   applyMiddleware(thunk)
  )

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={hist}>
      <Switch>
        {
          indexRoutes.map((prop, key) => <Route path={prop.path} key={key} component={prop.component} />)
        }
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
