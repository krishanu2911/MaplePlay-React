import React from "react";
import { FaClock, FaList, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import { useUserDetail } from "../../context/index";
function ListVideoCard({ videoItem, listDetail, listType }) {
  const { userDetailDispatch } = useUserDetail();
  return (
    <div className="video-card">
        <Link to={`/singlevideo/${videoItem._id}`}>
          <div
          onClick={() => userDetailDispatch({type:"HISTORY" , payload:{watchedVideo: videoItem, signal:"watched"}})}
          >
           <img src={videoItem.thumbnail} />
          </div>
          
        </Link>
      <h1 className="video-title-font lightcolor bold-font">
        {videoItem.title}
      </h1>
      <div className="maple-flex justify-spacebetween lightcolor">
        <h1 className="txt-m  txt-gray">{videoItem.creator}</h1>
        <div
          onClick={() => {
            if (listType === "playlist") {
              userDetailDispatch({
                type: "REMOVE_VIDEO",
                payload: { videoItem, listDetail },
              });
            }
            if (listType === "like") {
              userDetailDispatch({ type: "LIKE", payload: videoItem });
            }
            if (listType === "watchlater") {
              userDetailDispatch({ type: "WATCH_LATER", payload: videoItem });
            }
            if (listType === "history") {
              userDetailDispatch({ type: "HISTORY", payload:{watchedVideo: videoItem, signal:"remove"} });
            }
          }}
          className="poitner-cursor lightcolor"
        >
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
export default ListVideoCard;
