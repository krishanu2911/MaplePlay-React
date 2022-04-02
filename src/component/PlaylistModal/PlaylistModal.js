import React, { useState } from "react";
import "../../App.css";
import { IoCloseCircle } from "react-icons/io5";
import { useUserDetail } from "../../context/userDetail-context";
function PlaylistModal() {
  const [inputToggle, setInputToggle] = useState(false);
  const { modalDisplay, setModalDisplay } = useUserDetail();
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
        {inputToggle && <input type="text" />}
        <button
          onClick={() => {
            setInputToggle((prev) => !prev);
          }}
        >
          Add new playlist
        </button>
      </div>
    </div>
  );
}
export default PlaylistModal;
