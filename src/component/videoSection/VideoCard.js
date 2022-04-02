import React from "react";
import { FaClock, FaList } from "react-icons/fa";
import "../../App.css";
import { useUserDetail } from "../../context/userDetail-context";
function VideoCard({ videoItem }) {
    const { userDetailState ,userDetailDispatch , setModalDisplay } = useUserDetail();
    const {playlist} = userDetailState;
    console.log(playlist);
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
        <div onClick={() => setModalDisplay(true)} className="poitner-cursor">
          <FaList />
        </div>
      </div>
    </div>
  );
}
export default VideoCard;
