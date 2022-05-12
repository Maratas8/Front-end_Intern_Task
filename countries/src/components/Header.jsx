import React from "react";
import globe from "../images/globe-132.svg";

function Header() {
  return (
    <div>
      <div className="flex items-center">
        <img src={globe} alt="globe" width="100px" />
        <h1 className="text-7xl text-emerald-700">COUNTRIES</h1>
      </div>
    </div>
  );
}

export default Header;
