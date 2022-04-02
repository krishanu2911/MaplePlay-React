import React, { useState } from "react";
import "../../App.css";
import { IoCloseCircle } from "react-icons/io5";
import { useUserDetail } from "../../context/userDetail-context";
function PlaylistModal() {
  const [inputToggle, setInputToggle] = useState(false);
  const [inputValue , setInputValue] = useState("");
  const { modalDisplay, setModalDisplay, userDetailState, userDetailDispatch } = useUserDetail();
  const {playlist} = userDetailState;
  const createPlaylistHandler = () => {
    setInputToggle((prev) => !prev);
    inputValue && userDetailDispatch({ type:"CREATE_PLAYLIST", payload:inputValue})
  }
  console.log(playlist)
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
        {
           playlist.length && playlist.map((item) => {
                return(
                    <>
                    <input type="checkbox" />
                    <h1 className="lightcolor">{item.playlistname}</h1>
                    </>
                )
            })
        }
        {inputToggle && <input type="text"  onChange={(e) => setInputValue(e.target.value)}/>}
        <button
          onClick={() => {
            createPlaylistHandler()
          }}
        >
          Add new playlist
        </button>
      </div>
    </div>
  );
}
export default PlaylistModal;
