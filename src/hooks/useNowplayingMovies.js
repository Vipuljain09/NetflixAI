import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    // this hook fetch the now-playing-movies from TMDB and store in movie-Slice...
    

    const getPlayingMovies = async ()=>{
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const data = await res.json();
      console.log(data.results);
      dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
      getPlayingMovies();
    },[]);

};

export default useNowPlayingMovies;