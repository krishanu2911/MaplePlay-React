import React, { useState } from "react";
import { useUserDetail } from "../../context/userDetail-context";
import { useNavigate } from "react-router-dom";
import PlayListCard from "./PlayListCard";
function PlayListPage() {
  const videoListNavigate = useNavigate();
  const { userDetailState, userDetailDispatch } = useUserDetail();
  const { playlist } = userDetailState;
  const [newPlaylistName, setNewPlayListName] = useState("");
  return (
    <div className="padding-m">
      <div className="maple-flex gap-m playlist-header maple-wrap">
        <h1 className="lightcolor ">All Playlists</h1>
        <div className="maple-flex gap-m">
           <input
           value={newPlaylistName}
          type="text"
          onChange={(e) => setNewPlayListName(e.target.value)}
        />
        <button
        className="filterBtn padding-sm txt-m boldest-font"
          onClick={() => {
            newPlaylistName &&
              userDetailDispatch({
                type: "CREATE_PLAYLIST",
                payload: newPlaylistName,
              });
            setNewPlayListName("")
          }}
        >
          Add new playlist
        </button> 
        </div>
        
      </div>

      <div className="maple-flex-xy-center maple-wrap gap-m">
        {playlist.length ? (
          playlist.map((item) => {
            return <PlayListCard listDetail={item} key={item.playlistId} />;
          })
        ) : (
          <button
            onClick={() => {
              videoListNavigate("/videolist");
            }}
            className="filterBtn padding-m txt-xl boldest-font"
          >
            Go to Explore
          </button>
        )}
      </div>
    </div>
  );
}
export default PlayListPage;
