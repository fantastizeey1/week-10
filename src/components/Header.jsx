import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import {
  AiOutlineHome,
  AiOutlineClose,
  AiOutlineRocket,
  AiOutlineMenu,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import logo from "/src/assets/logofan.png";
import "/src/index.css";

function Header() {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinks = () => {
    setNavLinksOpen(!navLinksOpen);
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full font-condensed">
      <div className="pl-[27px] bg-transparent mx-auto flex justify-between items-center h-[96px]">
        <img src={logo} alt="" className="w-[100px]" />

        <div
          className={`md:flex md:bg-white md:bg-opacity-5 md:backdrop-blur-md md:w-[80%] lg:w-[60%] md:h-[96px] justify-center items-center text-white font-custom ${
            navLinksOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink exact to="/" className="nav-link m-16  md:m-12">
            HOME
          </NavLink>
          <NavLink to="/Destination" className="nav-link m-16 md:m-12 lg:ml-20">
            DESTINATION
          </NavLink>
          <NavLink to="/crew" className="nav-link m-16 md:m-12 lg:ml-20">
            CREW
          </NavLink>
          <NavLink to="/technology" className="nav-link m-16 md:m-12 lg:ml-20">
            TECHNOLOGY
          </NavLink>
        </div>
      </div>

      {menuOpen ? (
        <AiOutlineClose
          size={30}
          onClick={handleMenu}
          className="absolute top-4 right-4 z-[99] text-white/80 md:hidden hover:cursor-pointer"
        />
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={(e) => {
            handleMenu();
            e.stopPropagation();
          }}
          className="absolute top-4 right-4 z-[99] text-white/80 md:hidden hover:cursor-pointer"
        />
      )}

      {menuOpen && (
        <div className="absolute w-[70%] right-0 top-0 h-screen bg-[#979797]/10 backdrop-blur-xl flex flex-col justify-start items-start pt-16 z-20">
          <NavLink
            to="/"
            onClick={handleMenu}
            className="w-[50%] justify-start flex items-start m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 mt-10 text-white/90"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 mr-2">HOME</span>
          </NavLink>
          <NavLink
            to="/Destination"
            onClick={handleMenu}
            className="w-[75%] justify-start flex items-start m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white/90"
          >
            <IoLocationOutline size={20} />
            <span className="pl-4">DESTINATION</span>
          </NavLink>
          <NavLink
            to="/Crew"
            onClick={handleMenu}
            className="w-[75%] justify-start flex items-start m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white/90"
          >
            <HiOutlineUserGroup size={20} />
            <span className="pl-4">CREW</span>
          </NavLink>
          <NavLink
            to="/Technology"
            onClick={handleMenu}
            className="w-[75%] justify-start flex items-start m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-white/90"
          >
            <AiOutlineRocket size={20} />
            <span className="pl-4">TECHNOLOGY</span>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
