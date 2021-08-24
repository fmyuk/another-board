import { useCallback } from "react";
import RoomListContainer from "../../../controllers/client/containers/RoomListContainer";

function RoomListContents() {
  const render = useCallback(
    () => (
      <>
        <RoomListContainer />
      </>
    ),
    []
  );

  return (
    <div>
      {render()}
    </div>
  );
}

export default RoomListContents;