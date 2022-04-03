import { v4 as uuid } from "uuid";
const userDetailReducer = (state, action) => {
  const { playlist } = state;
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist,
          { playlistname: action.payload, playlistId: uuid(), videoList: [] },
        ],
      };
    case "REMOVE_VIDEO" :
      const { videoItem ,listDetail } = action.payload;
      const {playlistId} = listDetail;
      const findVideoPlayListobj = playlist.find((item) => item.playlistId === playlistId);
      const updateListAfterRemove = playlist.map((item) => item.playlistId === findVideoPlayListobj.playlistId ? {
        ...item,
        videoList: item.videoList.filter((item) => item._id !== videoItem._id)
      } : item
      
      )
      return { ...state, playlist: [...updateListAfterRemove] };
    case "REMOVE_PLAYLIST" :
      const updateAfterPlaylistRemove = playlist.filter((item) => item.playlistId !== action.payload )
      return { ...state, playlist: [...updateAfterPlaylistRemove] };
    case "ADD_VIDEO":
      // const { playlist } = state;
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
