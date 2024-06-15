import React from "react";
import { RiTwitterXFill, RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex h-20 items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4 bottom-0 w-screen">
      <span className="flex items-center justify-center gap-10">
      <a
          href="https://github.com/riteshk-007"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
            <img
              className="object-center rounded"
              alt="logo"
              src='./logo.svg'
            />
        </a>
      </span>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © Eusorone
      </p>
      <span className="flex items-center gap-10">
        <a
          href="https://github.com/riteshk-007"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <RiFacebookCircleFill />
        </a>
        <a
          href="https://twitter.com/Riteshk_007"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-8064b626b"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/riteshk_007/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <AiFillInstagram />
        </a>
      </span>
    </div>
  );
}

export default Footer;
