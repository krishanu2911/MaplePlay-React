import React from "react";
import { FaClock, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import { useUserDetail } from "../../context/userDetail-context";
function VideoCard({ videoItem }) {
  const { setModalDisplay, setPlayListModalData } = useUserDetail();
  return (
    
      <div className="video-card">
        <Link to={`/singlevideo/${videoItem._id}`}>
          <img src={videoItem.thumbnail} />
        </Link>
        <h1 className="video-title-font lightcolor bold-font">
          {videoItem.title}
        </h1>
        <div className="maple-flex justify-spacebetween lightcolor">
          <h1 className="txt-m  txt-gray">{videoItem.creator}</h1>
          <div className="maple-flex gap-m">
            <div
            onClick={() => {
              setPlayListModalData(videoItem);
              setModalDisplay(true);
            }}
            className="poitner-cursor"
          >
            <FaList />
          </div>
          <div>
            <FaClock />
          </div>
          </div>
          
        </div>
      </div>
  );
}
export default VideoCard;
