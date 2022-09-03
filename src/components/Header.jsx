import React, { useState } from "react";

// import components
import { Nav, NavMobile } from "./index";

// import logo
import Logo from "../assets/img/logo.png";

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Header() {
  const [navMobile,setNavMobile] = useState(false)
  return (
    <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center gap-x-[110px]">
            {/* logo */}
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>

            {/* nav - initially is hidden / show on large screens */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* navmobile - initially is showing / hidden on large screens */}
          <div
            className={`${
              navMobile ? "max-h-52" : "max-h-0"
            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>
          {/* button */}
          <button className="flex items-center gap-3 btn btn-quaternary  group">
            <p>Request Demo</p>
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>
          {/* nav trigger btn  / only shows on mobile screens */}
          <div
            className="lg:hidden text-2xl text-primary cursor-pointer"
            onClick={(e) => setNavMobile(!navMobile)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
}
