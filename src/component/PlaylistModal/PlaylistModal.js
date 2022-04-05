import React, { useState } from "react";
import "../../App.css";
import { IoCloseCircle } from "react-icons/io5";
import { useUserDetail } from "../../context/userDetail-context";
function PlaylistModal() {
  const [inputToggle, setInputToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    modalDisplay,
    setModalDisplay,
    userDetailState,
    userDetailDispatch,
    playListModalData,
  } = useUserDetail();
  const { playlist } = userDetailState;
  const createPlaylistHandler = () => {
    if (inputValue) {
      const checkPlayListPresent = playlist.find(
        (item) => item.playlistname === inputValue);
      if (checkPlayListPresent) {
        setInputToggle((prev) => !prev);
      } else {
        userDetailDispatch({ type: "CREATE_PLAYLIST", payload: inputValue });
        setInputToggle((prev) => !prev);
      }
      setInputValue("");
    } else {
      setInputToggle((prev) => !prev);
    }
  };
  const addVideoToPlaylistHandler = (specificPlayListId) => {
    userDetailDispatch({
      type: "ADD_VIDEO",
      payload: { specificPlayListId, playListModalData },
    });
  };
  return (
    <div
      className={`${
        modalDisplay ? "maple-flex" : "display-none"
      } playlist-modal-wrap`}
    >
      <div className="playlist-modal">
        <div className="modal-header">
          <h1 className="txt-lg txt-gray">Save to...</h1>
          <div onClick={() => setModalDisplay(false)}>
            <IoCloseCircle className="lightcolor txt-lg poitner-cursor" />
          </div>
        </div>
        <div>
          {playlist.map((item) => {
            return (
              <div className="maple-flex align-center gap-m">
                <input
                  onClick={() => addVideoToPlaylistHandler(item.playlistId)}
                  checked={item.videoList.includes(playListModalData)}
                  type="checkbox"
                />
                <h1 className="lightcolor txt-lg">{item.playlistname}</h1>
              </div>
            );
          })}
        </div>
        {inputToggle && (
          <div className="maple-flex gap-m">
          <h1 className="txt-m lightcolor">Name:</h1>
          <input type="text" onChange={(e) => setInputValue(e.target.value)} />
          </div>
          
        )}
        <button
        className="filterBtn padding-sm txt-m boldest-font"
          onClick={() => {
            createPlaylistHandler();
          }}
        >
          Add new playlist
        </button>
      </div>
    </div>
  );
}
export default PlaylistModal;
