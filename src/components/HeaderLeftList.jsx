import React from "react";
import { Link } from "react-router-dom";
const navList = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "TV Shows",
    url: "#",
  },
  {
    title: "Movies",
    url: "#",
  },
  {
    title: "New & Popular",
    url: "#",
  },
  {
    title: "My List",
    url: "#",
  },
];

const HeaderLeftList = () => {
  return (
    <div>
      <ul className="hidden lg:flex items-center gap-4 text-white text-base md:text-xl font-normal">
        {navList.map((item) => (
          <li key={item.title} className="hover:opacity-80">
            <Link>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderLeftList;
