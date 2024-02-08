import React, { useState } from "react";
import { IMG_URL } from "../../utils/constants";
import { FaRegCirclePlay } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

import Backdrop from "../../utils/Backdrop";
import MovieDetails from "../MovieDetails";

const MovieHoverCard = ({ positionX, posterUrl, genresList }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const showDetailModalHandler = () => {
    setShowDetailModal(true);
  };
  const openModal = () => {
    setShowDetailModal(true);
  };

  const closeModal = () => {
    setShowDetailModal(false);
  };
  return (
    <>
      <div
        className={`fixed bg-slate-950 w-[380px] h-80 cursor-pointer z-50 overflow-visible rounded-md transition ease-in-out delay-1000`}
        style={{ top: "0px", left: positionX }}
        onClick={showDetailModalHandler}
      >
        <img
          src={IMG_URL + posterUrl}
          alt=""
          className="w-[100%] h-40 object-cover"
        />
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaRegCirclePlay size={"40px"} color="white" />
              <SlLike size={"40px"} color="white" />
              <IoCheckmarkCircleOutline size={"40px"} color="white" />
            </div>
            <LuPlusCircle size={"40px"} color="white" />
          </div>
          {/* <p className="text-4xl font-medium text-white pt-2">{movieName}</p> */}
          <div className="flex items-center justify-between text-2xl font-medium">
            <span className="text-green-500">7.5 Rating</span>
            <span className="text-gray-600">2012-09-21</span>
          </div>
          <div className="flex overflow-clip text-white font-medium text-xl">
            {genresList.map((genre) => (
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span className="mr-2">{genre.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {showDetailModal && (
        <Backdrop onClose={closeModal}>
          <div className="relative flex flex-col modal w-[70%] h-[100%] overflow-y-scroll no-scrollbar bg-[#181818]">
            <div className="absolute top-4 right-8 w-max ml-auto cursor-pointer">
              <IoClose size={"40px"} color="gray" />
            </div>
            <MovieDetails />
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default MovieHoverCard;
