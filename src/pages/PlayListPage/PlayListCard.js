import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { FaTrash } from "react-icons/fa";
import { useUserDetail } from "../../context/userDetail-context";
function PlayListCard({ listDetail }) {
  const { playlistname, videoList, playlistId } = listDetail;
  const { userDetailDispatch } = useUserDetail();
  return (
    <div className="playlist-card padding-sm">
      <div className="playlist-card-header">
        <h1 className="txt-gray txt-lg">#{playlistname}</h1>
        <div
          className="lightcolor poitner-cursor"
          onClick={() => {
            userDetailDispatch({
              type: "REMOVE_PLAYLIST",
              payload: playlistId,
            });
          }}
        >
          <FaTrash />
        </div>
      </div>

      <Link to={`/playlist/${playlistId}`}>
        {videoList.length ? (
          <img
            src={`${videoList.slice(-1).map((item) => item.thumbnail)[0]}`}
          />
        ) : (
          <h1 className="lightcolor txt-lg">
            {playlistname} playlist is empty
          </h1>
        )}
      </Link>
    </div>
  );
}
export default PlayListCard;
