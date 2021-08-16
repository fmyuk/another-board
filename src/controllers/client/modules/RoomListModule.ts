import { Dispatch } from "react";

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
    roomList: []
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

export default function reducer(
  state = initialState,
  action: RoomAction
) {
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

export const fetchRooms = () => {
  return (dispatch: Dispatch<any>, getState: () => RoomListState) => {
    const prevRooms = getState().room.roomList;
    const RoomList = [];
    const room = { id: "0", title: "room0", previousText: "sample" }
    prevRooms.forEach(prevRoom => {
      RoomList.push(prevRoom);
    });
    RoomList.push(room);
    dispatch(fetchRoomsAction(RoomList));
  }
};