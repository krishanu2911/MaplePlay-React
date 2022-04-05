import React from "react";
import { FaClock, FaList , FaTrash } from "react-icons/fa";
import "../../App.css";
import { useUserDetail } from "../../context/userDetail-context";
function PlayListVideoCard({ videoItem ,listDetail }) {
    const { playlistId } = listDetail;
  const {
    userDetailState, userDetailDispatch
  } = useUserDetail();
  return (
    <div className="video-card">
      <div className="position-relative">
        <img src={videoItem.thumbnail} />
        <div className="txt-lg video-card-playlist">
          <FaClock />
        </div>
      </div>
      <h1 className="video-title-font lightcolor bold-font">
        {videoItem.title}
      </h1>
      <div className="maple-flex justify-spacebetween lightcolor">
        <h1 className="txt-m  txt-gray">{videoItem.creator}</h1>
        <div
          onClick={() => {
            userDetailDispatch({type:"REMOVE_VIDEO" , payload:{videoItem ,listDetail}})
          }}
          className="poitner-cursor lightcolor"
        >
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
export default PlayListVideoCard;