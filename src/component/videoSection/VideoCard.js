import React from "react";
import { FaClock, FaList, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import { useUserDetail } from "../../context/userDetail-context";
function VideoCard({ videoItem }) {
  const {
    setModalDisplay,
    setPlayListModalData,
    userDetailDispatch,
    userDetailState
  } = useUserDetail();
  const {  likedlist, watchlaterlist } = userDetailState;
  const videoInLikedList = likedlist.find((item) => item._id === videoItem._id)
  const videoInWatchLaterlist = watchlaterlist.find((item) => item._id === videoItem._id)
  return (
    <div className="video-card">
        <Link to={`/singlevideo/${videoItem._id}`}>
        <div
        onClick={() => userDetailDispatch({type:"HISTORY" , payload:{watchedVideo: videoItem, signal:"watched"}})}
        // onClick={() => userDetailDispatch({type:"ADD_HISTORY",payload:videoItem})}
        >
        <img src={videoItem.thumbnail}  /> 
        </div>
         
        
      </Link>
      <h1 className="video-title-font lightcolor bold-font">
        {videoItem.title}
      </h1>
      <div className="maple-flex justify-spacebetween lightcolor">
        <h1 className="txt-m  txt-gray">{videoItem.creator}</h1>
        <div className="maple-flex gap-m">
          <FaThumbsUp
            className={`poitner-cursor ${videoInLikedList ? "lightcolor" : "txt-gray"}`}
            onClick={() =>
              userDetailDispatch({ type: "LIKE", payload: videoItem })
            }
          />
          <FaClock 
            className={`poitner-cursor ${videoInWatchLaterlist ? "lightcolor" : "txt-gray"}`}
            onClick={() =>
              userDetailDispatch({ type: "WATCH_LATER", payload: videoItem })
            }
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoCard;
