import React, { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils/useAxios";
const VideoCategory = createContext();
const VideoCategoryProvider = ({ children }) => {
  const { apiResponse, loading } = useAxios("/api/videos");
  const [ videoList , setVideoList ] = useState([]);
    useEffect(() => {
        if (!loading) {
            setVideoList([...apiResponse.videos])
        }
    },[loading])
  return (
    <VideoCategory.Provider value={{ videoList , loading }}>
      {children}
    </VideoCategory.Provider>
  );
};
const useVideoCategory = () => useContext(VideoCategory);
export  { VideoCategoryProvider, useVideoCategory };