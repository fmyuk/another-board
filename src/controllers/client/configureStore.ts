import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer, { ReduxState } from "./modules/rootReducer";

const middlewares = [thunk];

const configureStore = (preloadedState: Partial<ReduxState>) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};
export default configureStore;