import { v4 as uuid } from "uuid";
const userDetailReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist,
          { playlistname: action.payload, playlistId: uuid(), videoList: [] },
        ],
      };
    case "ADD_VIDEO":
      const { playlist } = state;
      const { specificPlayListId, playListModalData } = action.payload;
      const findPlayListobj = playlist.find((item) => item.playlistId === specificPlayListId);
      const { videoList } = findPlayListobj;
      const findVideoInPlayList = videoList.find(
        (item) => item._id === playListModalData._id
      );
      console.log(findPlayListobj);
      if (findVideoInPlayList) {
        const updatedPlayList = playlist.map((item) =>
          item.playlistId === findPlayListobj.playlistId
            ? {
                ...item,
                videoList: item.videoList.filter((item) => item._id !== findVideoInPlayList._id),
              }
            : item
        );
        return { ...state, playlist: [...updatedPlayList] };
      } else {
        const updatedPlayList = playlist.map((item) =>
          item.playlistId === findPlayListobj.playlistId
            ? { ...item, videoList: [...item.videoList, playListModalData] }
            : item
        );
        return { ...state, playlist: [...updatedPlayList] };
      }
  }
};
export { userDetailReducer };
