import React from "react";
import globe from "../images/globe-132.svg";
import Button from "./Button";

function Header() {
  return (
    <div>
      <div className="flex items-center">
        <img src={globe} alt="globe" width="100px" />
        <h1 className="text-7xl text-emerald-700">COUNTRIES</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <Button text="Smaller than Lithuania" />
          <Button text="Is in Oceania" />
        </div>
        <div>
          <Button text="<>" />
        </div>
      </div>
    </div>
  );
}

export default Header;
