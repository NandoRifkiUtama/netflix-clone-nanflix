import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const sliceString = (string, num) => {
    if(string?.length > num){
        return string.slice(0, num) + '...';
    } else {
        return string;
    }
  }
  return (
    <div className="w-full h-[550px] text-white relative">
      <div className="w-full h-full">
        <div className="bg-gradient-to-r from-black w-full h-full absolute top-0 left-0 "></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[25%] px-4 md:px-8 z-[50] flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-5xl mb-4">
            {movie?.title}
          </h1>
          <div className="flex my-3">
            <p className="mr-6 border border-red-600 py-2 px-4 rounded-lg bg-red-600 hover:scale-105 duration-300 cursor-pointer">
              Play
            </p>
            <p className="mr-6 border py-2 px-4 rounded-lg hover:scale-105 duration-300 cursor-pointer">
              Watch Later
            </p>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Released : {movie?.release_date}
          </p>
          <p className="mt-2 text-sm max-w-[70%] md:max-w-[50%] lg:max-w-[30%]">
            {sliceString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
