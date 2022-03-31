import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
// import { } from "../Footer/Footer";
import { FaHome, FaList, FaCompass , FaThumbsUp , FaHistory , FaClock } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar maple-flex">
      <Link to="/">
        <div className="nav-pill maple-flex">
          <FaHome />
          <h1 className="txt-m">Home</h1>
        </div>
      </Link>
      <Link to="/videolist">
        <div className="nav-pill maple-flex">
          <FaCompass />
          <h1 className="txt-m">Explore</h1>
        </div>
      </Link>
      <Link to="/playlist">
        <div className="nav-pill maple-flex">
          <FaList />
          <h1 className="txt-m">PlayList</h1>
        </div>
      </Link>
      <Link to="/liked">
        <div className="nav-pill maple-flex">
          <FaThumbsUp />
          <h1 className="txt-m">Liked</h1>
        </div>
      </Link>
      <Link to="/watchlater">
        <div className="nav-pill maple-flex">
          <FaClock />
          <h1 className="txt-m">WatchLater</h1>
        </div>
      </Link>
      <Link to="/history">
        <div className="nav-pill maple-flex">
          <FaHistory />
          <h1 className="txt-m">History</h1>
        </div>
      </Link>
    </div>
  );
}
export default Navbar;
