import React, { useEffect, useRef, useState } from "react";
import { IMG_URL } from "../../utils/constants";
import { getMovieGenres } from "../../helper/getMovieGenres";
import { getMovieDetail } from "../../helper/getMovieDetail";
import MovieHoverCard from "./MovieHoverCard";
import altImg from "../../alt.jpg";
import MovieDetails from "../MovieDetails";
import Backdrop from "../../utils/Backdrop";
import { IoClose } from "react-icons/io5";
const MovieCard = ({ posterUrl, movieName, id }) => {
  // console.log(id);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const showDetailModalHandler = () => {
    console.log("aa");
    setShowDetailModal(!showDetailModal);
  };
  const openModal = () => {
    setShowDetailModal(false);
  };

  const closeModal = () => {
    setShowDetailModal(false);
  };

  console.log(showDetailModal);
  
  

  // if (genresList.length > 0) console.log(genresList);

  return (
    <>
    <div
      className={`mx-2 w-28 sm:w-44`}
      
      onClick={showDetailModalHandler}
    
    >
      <img
          src={posterUrl ? IMG_URL + posterUrl : altImg}
          alt=""
          srcset=""
          className="w-[100%] h-[100%] object-cover cursor-pointer"
        />
      

      {showDetailModal && (
        <Backdrop onClose={closeModal}>
          <div className="relative flex flex-col modal w-[70%] h-[100%] overflow-y-scroll no-scrollbar bg-[#181818]">
            <div className="absolute top-4 left-8 w-max ml-auto cursor-pointer">
              <IoClose size={"40px"} color="gray" onClick={()=>console.log("koo")}/>
            </div>
            <MovieDetails />
          </div>
        </Backdrop>
      )}

    </div>
    </>
  );
};

export default MovieCard;
