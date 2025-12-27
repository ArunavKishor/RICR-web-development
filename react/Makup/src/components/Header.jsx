import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#5A0E24] text-light text-5xl justify-between flex ">
        <div className="font-semibold  italic ">Makup Wala</div>
        <div className="flex text-2xl gap-3 justify-end mt-1">
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
        </div>
      </div>
    </>
  );
};

export default Header;
