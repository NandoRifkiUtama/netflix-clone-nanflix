import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        saveMovies: arrayUnion({
          id: item.id,
          title: item.title,
          image: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Sign In to save the movie ❤");
    }
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 relative cursor-pointer">
      <img
        className="w-full h-auto block object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 w-full h-full  ">
        <p className="text-white w-full h-full flex justify-center items-center text-xs md:text-sm px-4">
          {item.title}
        </p>
        <p onClick={saveMovie} className="absolute top-2 left-3 text-white hover:scale-105 duration-300">
          {like ? (
            <FavoriteIcon sx={{ fontSize: 15 }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 15 }} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
