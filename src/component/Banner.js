import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Banner() {
  const exploreNavigate = useNavigate();
  return (
    <div className="banner">
      <img
        className="banner-img"
        src="https://res.cloudinary.com/krishanucloud/image/upload/v1648720174/banner-play_larrt1.jpg"
        alt="homescreenBanner"
      />
      <div className="banner-side">
        <h1 className="lightcolor txt-lg txt-center">A streaming platform to watch videos related to philosophy.</h1>
        <button 
        onClick={() => exploreNavigate("/videolist")}
        className="bannerbtn lightbg txt-lg boldest-font poitner-cursor">Explore more</button>
      </div>
    </div>
  );
}
export default Banner;