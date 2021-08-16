import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Room from "../Organisms/Room";
import { getRooms } from "../reducks/room/selectors";
import { Rooms } from "../reducks/room/actions";
import { fetchRooms } from "../reducks/room/operations";

const RoomList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: Rooms) => state);
  const rooms = getRooms(selector);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <section>
      <div>
        {rooms.length > 0 && (
          rooms.map(room => (
            <Room
              id={room.id}
              title={room.title}
              previousText={room.previousText}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RoomList;