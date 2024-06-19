import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiGridFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import { WiDirectionUpRight, WiDirectionDownRight } from "react-icons/wi";


function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex justify-center">
      <div
        className={
          scroll
            ? "w-fit hidden lg:flex xl:flex fixed bottom-space items-center justify-between px-4 z-50 bg-opacity-20 backdrop-blur-lg drop-shadow-lg shadow-lg menu"
            : "w-fit hidden lg:flex xl:flex items-center justify-between px-4 z-50 fixed bottom-space menu"
        }
      >
        {/* <span className="capitalize md:w-1/3 lg:w-1/2 flex items-center justify-center py-5 px-2 relative">
        <h1
          className="cursor-pointer text-xl lg:text-3xl font-bold bg-gradient-to-r from-gray-50 to-blue-100 bg-clip-text text-transparent uppercase"
          onClick={() => navigate("/")}
        >
          {name}
        </h1>
      </span> */}
        <div className="w-full flex justify-center items-center text-white">
          <ul className="flex flex p-4 links-list">
            <li className={`border-r border-gray-500 relative group w-max ${selectedMenu === 0 ? 'hazmat-label' : ''}`}>
              <Link
                to={"/"}
                onClick={() => setSelectedMenu(0)}
                className="flex items-center justify-center cursor-pointer text-base lg:text-xl  before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[0] before:bg-purple-500 group-hover:before:w-full"
              >
                <span className="">About Us</span>
                {selectedMenu === 0 ?
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
            <li className={`border-r border-gray-500 relative group w-max ${selectedMenu === 1 ? 'hazmat-label' : ''}`}>
              <Link
                to={"/carrier"}
                onClick={() => setSelectedMenu(1)}
                className="flex items-center justify-center cursor-pointer text-base lg:text-xl before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[0] before:bg-purple-500 group-hover:before:w-full"
              >
                <span className="">Carrier</span>
                {selectedMenu === 1 ?
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
            <li className={`border-r border-gray-500 relative group w-max ${selectedMenu === 2 ? 'hazmat-label' : ''}`}>
              <Link
                to={"/esang"}
                onClick={() => setSelectedMenu(2)}
                className="flex items-center justify-center cursor-pointer text-base lg:text-xl  before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[0] before:bg-purple-500 group-hover:before:w-full"
              >
                {selectedMenu === 2 ?
                  (<img
                    src="./esang-sel.png"
                    alt="image 1"
                    className="w-[33px] p-2"
                  />) :
                  (<img
                    src="./esang.png"
                    alt="image 1"
                    className="w-[33px] p-2"
                  />)
                }
                <span className="">Esang</span>
                {selectedMenu === 2 ?
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
            <li className={`border-r border-gray-500 relative group w-max ${selectedMenu === 3 ? 'hazmat-label' : ''}`}>
              <Link
                to={"/shipper"}
                onClick={() => setSelectedMenu(3)}
                className="flex  items-center justify-center cursor-pointer text-base lg:text-xl before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[0] before:bg-purple-500 group-hover:before:w-full"
              >
                <span className="">Shipper</span>
                {selectedMenu === 3 ?
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
            <li className={`relative group w-max ${selectedMenu === 4 ? 'hazmat-label' : ''}`}>
              <Link
                to={"/business-overview"}
                onClick={() => setSelectedMenu(4)}
                className="flex items-center justify-center cursor-pointer text-base lg:text-xl before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[0] before:bg-purple-500 group-hover:before:w-full"
              >
                <span className="">Business Overview</span>
                {selectedMenu === 4 ?
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

          {/* <a
          href="https://github.com/riteshk-007/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex mx-10 gap-2 text-lg bg-purple-900 px-5 py-[5px] border border-purple-700 rounded-sm hover:bg-purple-800 transition-all duration-200 hover:-translate-y-[2px]"
        >
          <DiGitBranch fontSize={20} />
          <AiFillStar fontSize={20} />
        </a> */}
        </div>
      </div>
      <div className="mob-nav md:hidden flex">
        <img
          src="./logo.svg"
          alt="image 1"
          className="w-[60px] px-3"
        />
        <div className="h-full right-5 lg:hidden flex items-center justify-end cursor-pointer relative z-[99]">
          {showNav ? (
            <MdClose
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          ) : (
            <RiGridFill
              fontSize={25}
              className="text-white"
              onClick={() => setShowNav(!showNav)}
            />
          )}
          <MobileNav selectedMenu={selectedMenu} showNav={showNav} setShowNav={setShowNav} setSelectedMenu={setSelectedMenu} />
        </div>
      </div>
    </div>
  );
}

export default Header;
