import React from "react";
import { FaPencilAlt, FaUser, FaHouseUser } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const UserCard = ({onSignOut}) => {
  const signoutHandler = ()=>{
    onSignOut();
  }
  return (
    <div className="absolute right-0 top-10 md:top-14 shadow-xl opacity-90">
      <IoMdArrowDropup color={'white'} size={'30px'} className="absolute -top-5 right-7"/>
      <div className="w-44 sm:w-56 bg-black min-h-[160px] rounded-md text-white font-medium text-base p-2">
        <ul className="text-base">
          <li className="flex items-center gap-2 md:gap-4 p-2 underline">
            <FaPencilAlt color="gray" size={"28px"} />{" "}
            <Link>Manage Profile</Link>
          </li>
          <li className="flex items-center gap-2 md:gap-4 p-2 underline">
            <FaHouseUser color="gray" size={"28px"} />{" "}
            <Link>Transfer Profile</Link>
          </li>
          <li className="flex items-center gap-2 md:gap-4 p-2 underline">
            <FaUser color="gray" size={"28px"} /> <Link>Account</Link>
          </li>
          <li className="flex items-center gap-2 md:gap-4 p-2 underline">
            <FiHelpCircle color="gray" size={"28px"} /> <Link>Help Center</Link>
          </li>
        </ul>
        <div className="bg-gray-500 h-[2px]"></div>
        <p className="flex items-center justify-center bg-red-600 text-white py-2" onClick={signoutHandler}>
          Sign Out from Netflix
        </p>
      </div>
    </div>
  );
};

export default UserCard;
