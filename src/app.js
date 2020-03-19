import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addObject } from "./actions/object-actions";

import contacts from "../contacts.json"; // json-loader already exists in latest webpack

import getVisableObjects from "./selectors/objectSelector";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

contacts.map((contact) => {
     store.dispatch(addObject(contact));
});

const state = store.getState();
const visableObjects = getVisableObjects(state.objects, state.filters);

console.log(visableObjects);

const rootElement = (
     <Provider store={store}>
          <AppRouter />
     </Provider>
);

ReactDOM.render(rootElement, document.getElementById("root"));
