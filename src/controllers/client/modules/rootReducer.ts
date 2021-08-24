import { combineReducers } from "redux";
import { RoomAction, RoomListReducer, RoomListState } from "./RoomListModule";

export default combineReducers({
  roomList: RoomListReducer
});

export type ReduxState = {
  roomList: RoomListState
};

export type ReduxAction =
  | RoomAction;