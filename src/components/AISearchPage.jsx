import React, { useEffect, useRef } from "react";
import Header from "./Header";
import MovieCard from "./browse/MovieCard";
import MovieList from "./browse/MovieList";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Footer from "./Footer";
import Shimmer from "../utils/Shimmer";
import aiMovieSearch from "../helper/aiMovieSearch";
import { addSearchMovieList, toggleShowShimmer } from "../store/aiSlice";
import store from "../store/appStore";

const AISearchPage = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const isShimmerShow = useSelector((store) => store.aiSlice.showShimmer);
  const searchMovieList = useSelector((store) => store.aiSlice.searchMovieList);

  // const popularMovies = useSelector(store=>store.movies.nowPlayingMovies);
  // useNowPlayingMovies();

  const ClickHandler = async () => {
    const inputText = inputRef.current.value;

    dispatch(toggleShowShimmer());

    const result = await aiMovieSearch(inputText);
    console.log(result);
    dispatch(addSearchMovieList(result));

    dispatch(toggleShowShimmer());
    inputRef.current.value=''
  };
  console.log(searchMovieList);
  return (
    <div className="bg-black min-h-screen flex flex-col pt-40">
      <Header />

      <div className="flex items-center justify-center w-[80%] h-12 mx-auto">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Tell me about your Mood ?? "
          className="h-[100%] outline-none w-[85%] sm:w-[70%] p-1 sm:p-2 rounded-l-md bg-gray-900 text-white text-base sm:text-xl"
          ref={inputRef}
        />

        <p
          className="flex items-center px-2 sm:px-4 text-white sm:text-lg font-medium bg-purple-700 h-[100%] hover:opacity-90 rounded-r-md cursor-pointer"
          onClick={ClickHandler}
        >
          Search
        </p>
      </div>

      <p className="text-xl sm:text-3xl font-medium text-white mt-16 px-12">
        Explore More :
      </p>
      <div className="mt-8">
        {isShimmerShow && (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        )}

        {!isShimmerShow &&
          searchMovieList?.map((item) => {
            return <MovieList title={item.title} movieList={item.list} />;
          })}
      </div>
    </div>
  );
};

export default AISearchPage;
