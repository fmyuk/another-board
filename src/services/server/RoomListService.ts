export class RoomListService {
  public findRoomList() {
    return {
      roomList: [
        {
          id: "001",
          title: "sample1",
          previousText: "room sample1"
        },
        {
          id: "002",
          title: "sample2",
          previousText: "room sample2"
        },
        {
          id: "003",
          title: "sample3",
          previousText: "room sample3"
        }
      ]
    };
  }
}
