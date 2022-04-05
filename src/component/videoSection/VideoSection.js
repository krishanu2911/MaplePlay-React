import React from "react";
import { useVideoCategory } from "../../context/videoCategorized-context";
import { useFilter } from "../../context/filter-context";
import VideoCard from "./VideoCard";
import "../../App.css";

function VideoSection() {
  const { videoList } = useVideoCategory();
  const { filterState } = useFilter();
  const { filterSelect } = filterState;
  const filteredList =
    filterSelect === "All"
      ? videoList
      : videoList.filter((videoItem) => videoItem.category === filterSelect);
  return (
    <div className="maple-flex maple-wrap gap-lg padding-lg video-section">
      {filteredList.map((item) => {
        return <VideoCard videoItem={item} key={item._id} />;
      })}
    </div>
  );
}
export default VideoSection;
