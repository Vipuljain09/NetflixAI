import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import UserCard from "../utils/UserCard";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { PROFILE_LOGO } from "../utils/constants";

const AiSearchButton = () => {
  return (
    <p className="px-2 md:px-4 py-2 md:text-lg md:font-medium bg-purple-700 text-white rounded-md cursor-pointer hover:opacity-90">
      AI Search
    </p>
  );
};

const HeaderRightList = () => {
  const [isHover, setIsHover] = useState(false);

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex items-center gap-2 mr-2 lg:mr-8">
      <AiSearchButton />
      <IoIosSearch color="white" size={"32px"} className="md:mr-2" />
      <IoMdNotificationsOutline color="white" size={"32px"} />
      <div
        className="relative flex items-center cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={PROFILE_LOGO} alt="profile-logo" className="w-6 md:w-10" />
        {!isHover ? (
          <IoMdArrowDropdown color="white" size={"32px"} />
        ) : (
          <IoMdArrowDropup color="white" size={"32px"} />
        )}
        {isHover && <UserCard onSignOut={signoutHandler} />}
      </div>
    </div>
  );
};

export default HeaderRightList;
