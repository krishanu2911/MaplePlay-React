import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Navpill( {path , tabName , icon}) {
    return (
        <Link to={path}>
        <div className="nav-pill maple-flex">
          {icon}
          <h1 className="txt-m">{tabName}</h1>
        </div>
      </Link>
    )
}
export default Navpill;