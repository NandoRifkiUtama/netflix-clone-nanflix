import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data().saveMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (passID) => {
    try {
      const result = movies.filter((item) => item.id !== passID);
      await updateDoc(movieRef, {
        saveMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  return (
    <>
      <div>
        <p className="text-white p-4 font-bold ">Movies</p>
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
            id={"slider"}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          >
            {movies.map((item, id) => (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 relative cursor-pointer"
              >
                <img
                  className="w-full h-auto block object-cover rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500/${item.image}`}
                  alt={item.title}
                />
                <div className="absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 w-full h-full  ">
                  <p className="text-white w-full h-full flex justify-center items-center text-xs md:text-sm px-4">
                    {item.title}
                  </p>
                  <p
                    onClick={() => deleteMovie(item.id)}
                    className="absolute top-2 left-3 text-white hover:scale-105 duration-300"
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedShows;
