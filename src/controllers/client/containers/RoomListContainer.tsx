import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import RoomList from "../../../views/components/Templates/RoomList";
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
