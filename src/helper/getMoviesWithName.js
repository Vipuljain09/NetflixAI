import { API_OPTIONS } from "../utils/constants";

const getMoviesWithName = async (name) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const data = await res.json();
  const list = data.results;
  const len = list.length;

  return list.slice(0, Math.min(len, 5));
};
export default getMoviesWithName;
