import React from "react";
import { WiDirectionUpRight, WiDirectionDownRight } from "react-icons/wi";

import { Link } from "react-router-dom";
function MobileNav({ selectedMenu, showNav, setShowNav, setSelectedMenu }) {
  return (
    <div
      className={
        showNav
          ? "fixed top-0 h-full bg-black w-full top-[68px] left-0 rounded-b-md border-2 border-t-0 border-purple-700 transition-all duration-[500ms] overflow-hidden z-[-1]"
          : "fixed h-0 bg-black w-full top-[68px] left-0 rounded-b-md transition-all duration-[500ms] overflow-hidden z-[-1]"
      }
    >
      <div className=" block items-center m-10 text-white">
        <ul className="flex gap-8 flex-col mt-10">
          <li className={ `relative group ${selectedMenu === 0 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/"}
              className="flex gap-1 items-center cursor-pointer text-base font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(0)}}
            >
              <span className="">About Us</span>
              { selectedMenu === 0 ? 
                (<WiDirectionDownRight />):
                (<WiDirectionUpRight /> )
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 1 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/carrier"}
              className="flex gap-1 items-center cursor-pointer text-base font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(1)}}
            >
              <span className="">Carrier</span>
              { selectedMenu === 1 ? 
                (<WiDirectionDownRight />):
                (<WiDirectionUpRight /> )
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 2 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/"}
              className="flex gap-1 items-center cursor-pointer text-base font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(2)}}
            >
              <span className="">Esang</span>
              { selectedMenu === 2 ? 
                (<WiDirectionDownRight />):
                (<WiDirectionUpRight /> )
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 3 ? 'hazmat-label' : ''}`}>
            <Link
              to={"/shipper"}
              className="flex gap-1 items-center cursor-pointer text-base font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(3)}}
            >
              <span className="">Shipper</span>
              { selectedMenu === 3 ? 
                (<WiDirectionDownRight />):
                (<WiDirectionUpRight /> )
              }
            </Link>
          </li>
          <li className={ `relative group ${selectedMenu === 4 ? 'hazmat-label' : ''}`}>
            <Link
              // to={"/"}
              className="flex gap-1 items-center cursor-pointer text-base font-bold"
              onClick={() => { setShowNav(false); setSelectedMenu(4)}}
            >
              <span className="">Bussines Overview</span>
              { selectedMenu === 4 ? 
                (<WiDirectionDownRight />):
                (<WiDirectionUpRight /> )
              }
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
