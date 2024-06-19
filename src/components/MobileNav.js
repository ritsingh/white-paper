import React from "react";
import { WiDirectionUpRight, WiDirectionDownRight } from "react-icons/wi";

import { Link } from "react-router-dom";
function MobileNav({ selectedMenu, showNav, setShowNav, setSelectedMenu }) {
  return (
    <div
      className={
        showNav
          ? "fixed top-0 h-full bg-black w-full top-[60px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 transition-all duration-[500ms] overflow-hidden z-[-1]"
          : "fixed h-0 bg-black w-full top-[60px] left-0 rounded-b-md transition-all duration-[500ms] overflow-hidden z-[-1]"
      }
    >
      <div className=" block items-center m-10 text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className={ `relative group ${selectedMenu === 0 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/"}
              className="flex gap-1 items-center cursor-pointer text-lg font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(0)}}
            >
              <span className="">About Us</span>
              { selectedMenu === 0 ? 
                  (<img
                    src="./active-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />) :
                  (<img
                    src="./inactive-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />)
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 1 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/carrier"}
              className="flex gap-1 items-center cursor-pointer text-lg font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(1)}}
            >
              <span className="">Carrier</span>
              { selectedMenu === 1 ? 
                  (<img
                    src="./active-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />) :
                  (<img
                    src="./inactive-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />)
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 2 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/esang"}
              className="flex gap-1 items-center cursor-pointer text-lg font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(2)}}
            >
              <span className="">Esang</span>
              { selectedMenu === 2 ? 
                  (<img
                    src="./active-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />) :
                  (<img
                    src="./inactive-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />)
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 3 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/shipper"}
              className="flex gap-1 items-center cursor-pointer text-lg font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(3)}}
            >
              <span className="">Shipper</span>
              { selectedMenu === 3 ? 
                  (<img
                    src="./active-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />) :
                  (<img
                    src="./inactive-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />)
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 4 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/business-overview"}
              className="flex gap-1 items-center cursor-pointer text-lg font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(4)}}
            >
              <span className="">Business Overview</span>
              { selectedMenu === 4 ? 
                  (<img
                    src="./active-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />) :
                  (<img
                    src="./inactive-link.svg"
                    alt="image 1"
                    className="w-[33px] px-3"
                  />)
              }
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
