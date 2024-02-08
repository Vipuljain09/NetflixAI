import React, { useEffect } from "react";
import FAQPage from "./FAQPage";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const SignInHandler = ()=>{
    navigate('/login');
  }
  useEffect(() => {
    const cleanfn = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const uid = user.uid;
        console.log("kk");
        dispatch(
          addUser({
            uid: uid,
            email: user.email,
            diaplayName: user.displayName,
          })
        );
        console.log("kk");

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/home");
      }

      return () => {
        cleanfn();
      };
    });
  }, []);

  // if (user) {
  //   navigate("/browse");
  //   return;
  // }
  
  return (
    <div className="">
      <div className="flex flex-col relative items-center justify-center bg-gradient-to-tl from-black min-h-screen">
        <img
          className="absolute object-cover -z-10 h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mt-12">
          <p className="text-3xl md:text-5xl font-extrabold text-white text-center">
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </p>
          <p className="text-2xl md:text-3xl text-white text-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-3xl md:text-4xl text-white text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <p className="font-bold text-xl md:text-3xl text-white px-2 md:px-6 py-2 md:py-4 bg-red-600 rounded-lg  cursor-pointer" onClick={SignInHandler}>
            Get Started
          </p>
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row items-center justify-center gap-4 bg-black text-white p-8">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="kids-photo"
          className="w-[90%] md:w-[40%]"
        />
        <div className="w-[90%] md:w-[40%] flex flex-col items-center justify-center gap-4 my-">
          <p className="text-3xl sm:text-5xl font-bold text-center">
            Enjoy on your TV
          </p>
          <p className="text-2xl sm:text-4xl text-center">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>

      <div className="w-[100%] flex flex-col md:flex-row items-center justify-center gap-4 bg-black text-white p-8">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="kids-photo"
          className="w-[90%] md:w-[40%]"
        />
        <div className="w-[90%] md:w-[40%] flex flex-col items-center justify-center gap-4 my-8">
          <p className="text-3xl sm:text-5xl font-bold text-center">
            Download your shows to watch offline
          </p>
          <p className="text-2xl sm:text-4xl text-center">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 bg-black text-white p-8">
        <img
          src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          alt="kids-photo"
          className="w-[90%] md:w-[40%]"
        />
        <div className="w-[90%] md:w-[40%] flex flex-col items-center justify-center gap-4 my-8">
          <p className="text-3xl sm:text-5xl font-bold text-center">
            Create profiles for kids
          </p>
          <p className="text-2xl sm:text-4xl text-center">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>

      <FAQPage />
    </div>
  );
};

export default Home;
