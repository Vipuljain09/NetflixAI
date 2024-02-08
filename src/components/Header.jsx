import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import HeaderRightList from "./HeaderRightList";
import store from "../store/appStore";
import HeaderLeftList from "./HeaderLeftList";



const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const onauthHandler = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const userDetails = {
          name: user.displayName,
          id: user.uid,
          email: user.email,
        };
        dispatch(addUser(userDetails));
      } else {
        // console.log("signout");
        dispatch(removeUser(null));
      }
    });
  }, []);

  return (
    <div className={`absolute top-0 flex items-center justify-between md:px-4 z-[200] w-[100%] ${user && 'bg-black'}`}>
      <div className="flex items-center gap-2 md:gap-8">
        <img
          className="w-24 sm:w-32 md:w-40"
          src={require("../logo.png")}
          alt="logo"
        />
        {user && <HeaderLeftList />}
      </div>

      <HeaderRightList />
    </div>
  );
};

export default Header;
