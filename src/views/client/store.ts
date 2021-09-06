import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { RoomListReducer } from "../../controllers/client/modules/RoomListModule";

export default function createStore(history: ReturnType<typeof createBrowserHistory>) {
  return reduxCreateStore(
    combineReducers({
      rooms: RoomListReducer,
      router: connectRouter(history)
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
}
