import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RoomList } from "../../../views/components/Organisms/RoomList";
import { fetchRooms, RoomAction, RoomListState } from "../modules/RoomListModule";

const mapStateToProps = (state: RoomListState) => {
  const {
    room
  } = state

  return {
    room
  }
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RoomListState, undefined, RoomAction>
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
