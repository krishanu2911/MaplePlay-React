import "../../App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserDetail, useVideoCategory } from "../../context/index";
import { FaList, FaThumbsUp, FaClock } from "react-icons/fa";
function SingleVideoPage() {
  const { videoId } = useParams();
  const [singleVideoDetail, setSingleVideoDetail] = useState({});
  const { setModalDisplay, setPlayListModalData, userDetailState, userDetailDispatch } = useUserDetail();
  const { likedlist ,watchlaterlist} = userDetailState
  const { videoList, loading } = useVideoCategory();
  const videoInLikedList = likedlist.find((item) => item._id === singleVideoDetail._id)
  const videoInWatchLaterlist = watchlaterlist.find((item) => item._id === singleVideoDetail._id)
  useEffect(() => {
    if (!loading) {
      const foundSingleVideoInList = videoList.find(
        (item) => item._id === videoId
      );
      setSingleVideoDetail(foundSingleVideoInList);
    }
  }, [videoList]);
  return (
    <div className="maple-flex-xy-center padding-m">
      {loading ? (
        <h1 className="lightcolor">Loading....</h1>
      ) : (
        <section className="singlevideo-div">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullScreen
            className="margin-bottom"
            />
          <footer>
           <div className="flex-column gap-m">
            <h1 className="txt-lg lightcolor">{singleVideoDetail.title}</h1>
            <div className="maple-flex gap-m">
              <FaThumbsUp 
              className={`poitner-cursor ${videoInLikedList ? "lightcolor" : "txt-gray"} txt-lg`}
              onClick={() => userDetailDispatch({ type: "LIKE", payload: singleVideoDetail })}
              />
              <FaClock 
              className={`poitner-cursor ${videoInWatchLaterlist ? "lightcolor" : "txt-gray"} txt-lg`}
              onClick={() => userDetailDispatch({ type: "WATCH_LATER", payload: singleVideoDetail })}
              />
              <FaList
                onClick={() => {
                  setPlayListModalData(singleVideoDetail);
                  setModalDisplay(true);
                }}
                className="lightcolor poitner-cursor txt-lg"
              />
            </div>
            <p className="lightcolor">{singleVideoDetail.description}</p>
          </div>   
          </footer>
        </section>
      )}
    </div>
  );
}
export default SingleVideoPage;
