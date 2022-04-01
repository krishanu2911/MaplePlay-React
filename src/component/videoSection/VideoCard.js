import React from "react";
import { FaClock, FaList } from "react-icons/fa";
import "../../App.css";
function VideoCard({ videoItem }) {
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
        <FaList />
      </div>
    </div>
  );
}
export default VideoCard;
