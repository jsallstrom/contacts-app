import { createStore, combineReducers } from "redux";
import objectReducer from "../reducers/objectReducer";
import filtersReducer from "../reducers/filtersReducer";

// Store creation, configuration and exportation
export default () => {
     const store = createStore(
          combineReducers({
               objects: objectReducer,
               filters: filtersReducer
          }),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
     return store;
};
