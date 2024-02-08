import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidators } from "../utils/checkValidator";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/appStore";
import { BACK_GROUND_IMG_URL } from "../utils/constants";
import signInHandler from "../auth/sign_In_Handler";
import signUpHandler from "../auth/signUpHandler";


const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();

  // const user = useSelector((store=>store.user));

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = checkValidators(email.current.value, password.current.value);

    setErrorMessage(res);
    if (res) return;

    if (isSignIn) {
      const response = await signInHandler(
        email.current.value,
        password.current.value
      );
      if (response?.error) setErrorMessage(response.error.message);
      else {
        console.log("Congrats");
      }
    } else {
      const response = await signUpHandler(
        name.current.value,
        email.current.value,
        password.current.value
      );

      if (response?.error) setErrorMessage(response.error.message);
      else {
        console.log("Congrats");
      }
    }
  };

  return (
    <div className="flex flex-col relative bg-gradient-to-tl from-black min-h-screen">
      <img
        className="absolute object-cover -z-10 h-full w-full"
        src={BACK_GROUND_IMG_URL}
        alt=""
      />
      <form
        className="flex flex-col items-start justify-center bg-black w-[100%] sm:w-[50%] lg:w-[35%] m-auto gap-3 px-2 lg:px-4 py-4 lg:py-8 sm:px-6 bg-opacity-80 rounded-lg"
        onSubmit={submitHandler}
      >
        <div className="w-[80%] mx-auto">
          {errorMessage && (
            <p className="text-orange-500 w-full text-center text-2xl">
              {errorMessage} <span>!!</span>
            </p>
          )}

          <p className="text-white text-3xl w-full text-center">
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </p>

          {!isSignIn && (
            <input
              type="text"
              name=""
              id=""
              placeholder="Full name"
              className="w-[100%] text-lg sm:text-xl text-white bg-gray-800 rounded-lg px-2 py-2 my-2 outline-none"
              ref={name}
            />
          )}
          <input
            type="email"
            name=""
            id=""
            placeholder="Email or phone number"
            className="w-[100%] text-lg sm:text-xl text-white bg-gray-800 rounded-lg px-2 py-2 my-2 outline-none"
            ref={email}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="w-[100%] text-lg sm:text-xl text-white bg-gray-800 rounded-lg px-2 py-2 my-2 outline-none"
            ref={password}
          />
          <button
            type="submit"
            className="w-[100%] text-lg sm:text-xl py-2 my-2 text-white bg-red-700 rounded-lg"
          >
            {isSignIn ? "Sign-In" : "Sign-Up"}
          </button>
          <div className="flex items-center justify-between w-full">
            <div className="flex text-gray-500 text-base items-center justify-center gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remerber me">Remerber me</label>
            </div>
            <div className="text-gray-500 cursor-pointer">Need Help?</div>
          </div>
          <div className="my-4 text-gray-500">
            {!isSignIn ? "Already a member of Netflix" : "New to Netflix"}?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={() => setIsSignIn((pre) => !pre)}
            >
              {isSignIn ? "Sign-up now" : "Sign-in now"}
            </span>
          </div>
          <span className="text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600">Learn more.</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
