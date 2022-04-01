import React from "react";
import "../App.css";
function Banner() {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src="https://res.cloudinary.com/krishanucloud/image/upload/v1648720174/banner-play_larrt1.jpg"
        alt="homescreenBanner"
      />
      <div className="banner-side">
        <h1 className="lightcolor txt-lg txt-center">A streaming platform to watch videos related to philosophy.</h1>
        <button className="bannerbtn lightbg txt-lg boldest-font">Explore more</button>
      </div>
    </div>
  );
}
export default Banner;