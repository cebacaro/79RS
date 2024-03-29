import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#832388] text-white font-light quicksand pt-2 h-[59px] text-[20px]">
      <ul className="flex justify-end pr-6 gap-6">
        <li className="hover:scale-110 duration-200">
          <NavLink
            exact="true"
            to="/"
            className="Link  "
            activeclassname="active "
          >
            Home
          </NavLink>
        </li>
        <li className="hover:scale-110 duration-200">
          <NavLink to="/about" className="Link  " activeclassname="active">
            Our Story
          </NavLink>
        </li>
        <li className="hover:scale-110 duration-200">
          <NavLink to="press" className="Link  " activeclassname="active">
            Press
          </NavLink>
        </li>
        <li className="hover:scale-110 duration-200">
          <NavLink to="/shows" className="Link  " activeclassname="active">
            Videos
          </NavLink>
        </li>
        <li className="hover:scale-110 duration-200">
          <NavLink to="/gallery" className="Link " activeclassnamee="active">
            Gallery
          </NavLink>
        </li>
        <li className="hover:scale-110 duration-200">
          <NavLink to="/contact" className="Link " activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
