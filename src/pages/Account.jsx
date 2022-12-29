import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div>
        <img
          className="w-full h-[400px] object-cover left-0 top-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/26c35d01-db23-4f28-b2eb-42490d7f4002/ID-en-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 w-full h-[400px] top-0 left-0"></div>
        <p className="fixed top-[25%] text-white px-4 md:px-8 text-3xl md:text-5xl font-bold">My Movies</p>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
