import React from "react";
import { RiTwitterXFill, RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <React.Fragment>
      <img
        className=" md:z-0 z-[99] md:pt-24 md:pt-0 m-auto z-[99] relative"
        alt="footer-lin"
        src='./footer-line.png'
      />
      <div className=" md:z-0 z-[99] relative flex items-center justify-center md:justify-between text-white flex-wrap bottom-0 md:p-10 px-0 md:py-6 py-2 ">
        <span className=" md:flex hidden items-center justify-center gap-10">
          <a
            href="/"
            rel="noreferrer"
            className="text-white"
          >
            <img
              className="w-[60px] px-3"
              alt="logo"
              src='./logo.svg'
            />
          </a>
        </span>
        <div className="flex flex-col justify-center item-center px-4 md:p-0">
          <span className="flex items-center gap-10">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <RiTwitterXFill />
            </a>
            <a
              href="https://www.linkedin.com/company/eusorone-technologies-inc/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/eusorone?igsh=MThneDU4eGdocTU0aA=="
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <AiFillInstagram />
            </a>
          </span>
          <p className="md:text-sm text-xs text-center mt-2 md:m-2 md:pt-4 pt-1">
            Copyright © Eusorone. Privacy policy
          </p>

        </div>
      </div>

    </React.Fragment>
  );
}

export default Footer;
