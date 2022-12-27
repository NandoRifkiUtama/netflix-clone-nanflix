import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <p className="text-white p-4 font-bold ">{title}</p>
      <div className="flex items-center relative group">
        <div onClick={slideLeft} className="text-white rounded-full opacity-50 hover:opacity-100 absolute hover:scale-105 duration-300 left-1 z-[10] hidden group-hover:block cursor-pointer ">
          <ArrowCircleLeftIcon  sx={{ fontSize: 50 }} />
        </div>
        <div onCLick={slideRight} className="text-white rounded-full absolute opacity-50 hover:opacity-100 hover:scale-105 duration-300 right-1 z-[10] hidden group-hover:block cursor-pointer">
          <ArrowCircleRightIcon  sx={{ fontSize: 50 }} />
        </div>
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 relative cursor-pointer"
            >
              <img
                className="w-full h-auto block object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 w-full h-full  ">
                <p className="text-white w-full h-full flex justify-center items-center text-xs md:text-sm px-4">
                  {item.title}
                </p>
                <p className="absolute top-2 left-3 text-white">
                  {like ? (
                    <FavoriteIcon sx={{ fontSize: 15 }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 15 }} />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
