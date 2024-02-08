import { API_OPTIONS } from "../utils/constants";

const getVideoKey = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    API_OPTIONS
  );

  let data = await res.json();
  data = data.results;

  const trailer = data.find((item) => item.type === "Trailer");
  return trailer.key;
};
export default getVideoKey;
