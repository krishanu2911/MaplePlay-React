import React from "react";
import "../../App.css";
import {navbarInfo} from "./navbarInfo";
import Navpill from "./Navpill";

function Navbar() {
  return (
    <div className="navbar maple-flex">
      {
        navbarInfo.map((tabs) => {
          return<Navpill path={tabs.tabpath}  tabName={tabs.tabName} icon={tabs.icon} />
        })
      }
    </div>
  );
}
export default Navbar;
