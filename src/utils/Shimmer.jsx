import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "../components/browse/MovieCard";

export const MovieCardShimmer = ({ color }) => {
  return (
    <div
      className={
        "mr-2 w-[320px] h-52 rounded-xl animate-pulse bg-gradient-to-r " + color
      }
    ></div>
  );
};
const Shimmer = () => {
  return (
    <div className="relative px-12 my-12">
      <p className="flex items-center gap-3 w-72  bg-gray-800 rounded-md my-4"></p>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-2">
          <MovieCardShimmer color={"from-[#98AFCF] bg-gray-800"} />
          <MovieCardShimmer color={"from-gray-800 bg-[#98AFCF]"} />
          <MovieCardShimmer color={"from-[#98AFCF] bg-gray-800"} />
          <MovieCardShimmer color={"from-gray-800 bg-[#98AFCF]"} />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
