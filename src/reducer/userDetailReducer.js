import { v4 as uuid } from "uuid";
const userDetailReducer = (state, action) => {
  const { playlist , likedlist , watchlaterlist ,historylist } = state;
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
      const { specificPlayListId, playListModalData } = action.payload;
      const findPlayListobj = playlist.find((item) => item.playlistId === specificPlayListId);
      const { videoList } = findPlayListobj;
      const findVideoInPlayList = videoList.find(
        (item) => item._id === playListModalData._id
      );
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
    case "LIKE" :
      const likedVideo = action.payload; 
      const findVideoInLikeList = likedlist.find((item) => item._id === likedVideo._id)
      if(findVideoInLikeList){
        const updatedLikedList = likedlist.filter((item) => item._id !== likedVideo._id)
        return {...state,likedlist:[...updatedLikedList]}
      }
      else{
        return {...state,likedlist:[...state.likedlist,likedVideo]}
      }
      case "WATCH_LATER" :
        const watchLaterVideo = action.payload; 
        const findVideoInWatchLaterList = watchlaterlist.find((item) => item._id === watchLaterVideo._id)
        if(findVideoInWatchLaterList){
          const updatedWatchLaterList = watchlaterlist.filter((item) => item._id !== watchLaterVideo._id)
          return {...state,watchlaterlist:[...updatedWatchLaterList]}
        }
        else{
          return {...state,watchlaterlist:[...state.watchlaterlist,watchLaterVideo]}
        }
      case "HISTORY" :
        const{ watchedVideo , signal }= action.payload;
        if(signal==="watched"){
          return {...state,historylist:[...state.historylist,watchedVideo]}
        }
        if(signal==="remove"){
          const updatedHistoryList = historylist.filter((item) => item._id !== watchedVideo._id)
          return {...state,historylist:[...updatedHistoryList]}
        }
      case "CLEAR_HISTORY" :
        return{...state,historylist:[]}
  }
};
export { userDetailReducer };
