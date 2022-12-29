import axios from "axios";
import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Movie from "./Movie";


const Row = ({ title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <p className="text-white p-4 font-bold ">{title}</p>
      <div className="flex items-center relative group">
        <div
          onClick={slideLeft}
          className="text-white rounded-full opacity-50 hover:opacity-100 absolute hover:scale-105 duration-300 left-1 z-[10] hidden group-hover:block cursor-pointer "
        >
          <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
        </div>
        <div
          onClick={slideRight}
          className="text-white rounded-full absolute opacity-50 hover:opacity-100 hover:scale-105 duration-300 right-1 z-[10] hidden group-hover:block cursor-pointer"
        >
          <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
        </div>
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
