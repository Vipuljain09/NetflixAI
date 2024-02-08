import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const list = [
  {
    url: "#",
    title: "FAQ",
  },
  {
    url: "#",
    title: "Speed test",
  },
  {
    url: "#",
    title: "Help Centre",
  },
  {
    url: "#",
    title: "Media Centre",
  },
  {
    url: "#",
    title: "Jobs",
  },
  {
    url: "#",
    title: "Legal Notice",
  },
  {
    url: "#",
    title: "Account",
  },
  {
    url: "#",
    title: "FAQ",
  },
  {
    url: "#",
    title: "Speed test",
  },
  {
    url: "#",
    title: "Help Centre",
  },
  {
    url: "#",
    title: "Media Centre",
  },
];
const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-gray-400 p-2 md:p-6">
      <div className="mx-2 md:mx-16">
        <p className="flex items-center gap-8 text-3xl py-4">
          <FaFacebook color="white" size={'30px'} className="cursor-pointer w-[36px]" />
          <FaInstagram color="white" size={"30px"} className="cursor-pointer" />
          <FaTwitter color="white" size={"30px"} className="cursor-pointer" />
          <FaYoutube color="white" size={"30px"} className="cursor-pointer" />
        </p>
        <div className="py-2">
          <ul className="grid grid-cols-2 gap-4">
            {list.map((item) => {
              return (
                <li className="col-span-1 md:text-lg underline">{item.title}</li>
              );
            })}
          </ul>
        </div>
        <p className="text-lg border-4 border-gray-400 rounded-lg px-6 py-1 my-4 w-max cursor-pointer">
          English
        </p>
        <p className="text-lg py-4">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;
