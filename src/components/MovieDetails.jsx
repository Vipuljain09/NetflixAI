import React from "react";
import { IMG_URL } from "../utils/constants";
const ListItems = ({ title, items }) => {
  return (
    <div className="py-1">
      <span className="text-gray-500 text-lg">{title}: </span>
      <span className="font-medium">{items.map((item) => `${item}, `)}</span>
    </div>
  );
};
const ShowMoreMovieCard = () => {
  return (
    <div className="bg-[#2f2f2f] text-[#979797] w-72 cursor-pointer rounded-sm">
      <img
        src={IMG_URL + "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg"}
        alt=""
        className="w-[100%] h-44 object-cover"
      />
      <div className="px-2 py-4">
        <div className="text-xl flex items-center gap-4 py-2">
          <span className="border-2 border-gray-400 rounded-sm p-1 font-normal">
            U/A 16+
          </span>
          <span>2023</span>
        </div>
        <p className="text-lg">
          Willy Wonka – chock-full of ideas and determined to change the world
          one delectable bite at a time – is proof that the best things in life
          begin with a dream,
        </p>
      </div>
    </div>
  );
};

const MovieDetails = () => {
  return (
    <div className="text-white">
      <img
        src="https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
        alt="poster-img"
        className="h-[80vh] w-[100%] object-cover"
      />
      <div className="flex items-center gap-8 px-12 py-4 mb-12">
        <div className="flex flex-col items-start gap-2 w-[70%]">
          <div className="flex items-center gap-2 text-gray-400 text-xl">
            <span className="text-green-500 text-xl font-semibold">New</span>
            <span>2023</span>
            <span>2h 30m</span>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <span className="border-2 border-gray-400 rounded-sm p-1 font-normal">
              U/A 16+
            </span>
            <span>gore, tabacoo use, voilence</span>
          </div>
          <div>
            <p className="font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum
              sed enim molestiae est. Cupiditate libero quod, aspernatur,
              asperiores consequatur illo voluptatum aliquid, ipsa animi eius
              quas expedita nisi provident.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 w-[30%]">
          <div className="">
            <span className="text-gray-500 text-lg">Cast: </span>
            <span className="font-medium">
              Dai Mizra, Fatima Sana Shanink, Ratan Pathak Shah and more
            </span>
          </div>
          <div>
            <span className="text-gray-500 text-lg">genres: </span>
            <span className="font-medium">
              Fatima Sana Shanink, Ratan Pathak Shah and more
            </span>
          </div>
          <div>
            <span className="text-gray-500 text-lg">This movie is: </span>
            <span className="font-medium">
              Dai Mizra, Ratan Pathak Shah and more
            </span>
          </div>
        </div>
      </div>

      {/* ............................ */}
      <div className="px-12 py-4">
        <p className="text-3xl font-medium my-2">More Like This </p>
        <div className="flex items-center flex-wrap gap-8">
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
          <ShowMoreMovieCard />
        </div>
      </div>

      {/* ..................???????????????????? */}

      <hr />

      <div className="px-12 py-4">
        <p className="text-3xl font-medium py-4">About Movie </p>
        <ListItems title="Director" items={["Tarun Dudeja"]} />
        <ListItems
          title="Cast"
          items={[
            "Dai Mizra",
            "Fatima Sana Shanink",
            "Ratan Pathak Shah",
            "and more",
          ]}
        />
        <ListItems title="Writer" items={["Parijat Joshi", "Tarun Dudeja"]} />
        <ListItems
          title="Genres"
          items={[
            "Hindi-Language Movies",
            "Bollywood Movies",
            "Dramas",
            "Actions & Adventure Movies",
          ]}
        />
        <ListItems
          title="This movie is"
          items={["Intimate", "Heartfelt", "Emotional"]}
        />
        <ListItems
          title="Maturity rating"
          items={[
            "sexual Content",
            "Suitable for person aged 16 and above and under parental guidance for people under age of 16",
          ]}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
