import RoomListContents from "../../views/components/Templates/RoomListContents";

const service = new RoomListService();

const RoomListController = async (req, res, next) => {
  try {
    const [
      roomList
    ] = await Promise.all([
      service.findRoomList()
    ]);
    const state = {
      roomList
    };

    const { contents, preloadedState } = ssr(state, RoomListContents);

  } catch (e) {
    throw new Error(e);
  }
}

export default RoomListController;