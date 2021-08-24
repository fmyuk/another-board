import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RoomList } from "../../../views/components/Organisms/RoomList";
import { fetchRooms } from "../modules/RoomListModule";
import { ReduxAction, ReduxState } from "../modules/rootReducer";

const mapStateToProps = (state: ReduxState) => {
  const {
    roomList
  } = state

  return {
    room: roomList.room
  }
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<ReduxState, undefined, ReduxAction>
) => {
  return {
    actions: {
      fetch: () => {
        dispatch(fetchRooms());
      }
    }
  };
};

type RoomListProps = Parameters<typeof RoomList>[0];

function RoomListContainer(props: RoomListProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return <RoomList {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomListContainer);
