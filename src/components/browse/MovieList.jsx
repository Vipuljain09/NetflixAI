import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movieList }) => {
  // console.log(title, movieList);

  return (
    <div className="relative px-4 ms:px-12 py-4 sm:py-8">
      <p className="flex items-center gap-3 text-white font-medium text-lg sm:text-2xl py-4">
        {title}
        <span>
          <IoIosArrowForward />
        </span>
      </p>
      <div className="flex overflow-x-scroll no-scrollbar h-40 sm:h-64">
        <div className="flex">
          {movieList?.map((item) => (
            <MovieCard
              key={item.id}
              posterUrl={item?.poster_path}
              movieName={item.title}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// return (
//   <div className="relative px-12 my-12">
//     <p className="flex items-center gap-3 text-white font-medium text-2xl py-4">
//       {title}
//       <span>
//         <IoIosArrowForward />
//       </span>
//     </p>
//     <div className="flex overflow-x-scroll no-scrollbar h-52">
//       <div className="flex">
//       <Slider {...React_Slider_Settings}/>
//         {movieList?.map((item) => (
//           <MovieCard
//             key={item.id}
//             posterUrl={item?.poster_path}
//             movieName={item.title}
//             id={item.id}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );
