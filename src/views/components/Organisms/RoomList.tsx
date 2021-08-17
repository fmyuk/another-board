import React from "react";
import Room from "../Molecules/Room";

type RoomProps = {
  id: string,
  title: string,
  previousText: string
};

type RoomListProps = {
  roomList: RoomProps[]
};

export function RoomList({
  roomList
}: RoomListProps) {
  return (
    <section>
      <div>
        {roomList.length > 0 && (
          roomList.map(room => (
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
}
