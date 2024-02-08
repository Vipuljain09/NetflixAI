import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import MovieList from "./MovieList";

const Browse = () => {
  const user = useSelector((store) => store.user);
  const popularMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const logoutHandler = () => {
    signOut(auth);
  };

  useNowPlayingMovies();

  return (
    <div className="">
      
      <MainContainer />

      <div className="bg-black">
        <div className="relative md:-top-[180px] xl:-top-[250px]">
          <MovieList title="Popular List" movieList={popularMovies} />
          <MovieList title="Popular List" movieList={popularMovies} />
          <MovieList title="Popular List" movieList={popularMovies} />
          <MovieList title="Popular List" movieList={popularMovies} />
          <MovieList title="Popular List" movieList={popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default Browse;
