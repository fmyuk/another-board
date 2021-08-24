import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { ReduxAction, ReduxState } from "./rootReducer";

type Room = {
  id: string,
  title: string,
  previousText: string
};

export interface RoomListState {
  room: {
    roomList: Room[]
  }
};

export const initialState: RoomListState = {
  room: {
    roomList: [
      {
        id: "001",
        title: "sample",
        previousText: "room sample"
      }
    ]
  }
};

export const actionTypes = {
  FETCH_ROOMS: "FETCH_ROOMS",
  DELETE_ROOM: "DELETE_ROOM"
};

export const fetchRoomsAction = (rooms: Room[]) => ({
  type: actionTypes.FETCH_ROOMS,
  payload: rooms
});

export const deleteRoomAction = (rooms: Room[]) => ({
  type: actionTypes.DELETE_ROOM,
  payload: rooms
});

export type RoomAction =
  | ReturnType<typeof fetchRoomsAction>
  | ReturnType<typeof deleteRoomAction>;

export const RoomListReducer = (
  state = initialState,
  action: RoomAction
) => {
  switch (action.type) {
    case actionTypes.DELETE_ROOM:
      return {
        ...state,
        rooms: [...action.payload]
      };
    case actionTypes.FETCH_ROOMS:
      return {
        ...state,
        rooms: [...action.payload]
      };
    default:
      return state;
  }
}

export const fetchRooms = (): ThunkAction<
  void,
  ReduxState,
  undefined,
  ReduxAction
> => {
  return (dispatch, getState) => {
    const prevRooms = getState().roomList.room.roomList;
    const RoomList = [];
    const room = { id: "0", title: "room0", previousText: "sample" }
    prevRooms.forEach(prevRoom => {
      RoomList.push(prevRoom);
    });
    RoomList.push(room);
    dispatch(fetchRoomsAction(RoomList));
  }
};