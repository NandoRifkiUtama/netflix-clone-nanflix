import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white py-6 px-4 md:px-8 absolute left-0 top-0 w-full z-[100]">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NANFLIX
          </h1>
        </Link>
        {user?.email ? (
          <div className="flex justify-center items-center">
            <Link to="/account">
              <p className="text-xs sm:text-[16px] mr-4 sm:mr-6 cursor-pointer hover:scale-105 duration-100">
                Account
              </p>
            </Link>
            <p onClick={handleLogout} className="text-xs sm:text-[16px] bg-red-600 px-3 py-2 rounded-lg cursor-pointer hover:scale-105 duration-100">
              Logout
            </p>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Link to="/signin">
              <p className="text-xs sm:text-[16px] mr-4 sm:mr-6 cursor-pointer hover:scale-105 duration-100">
                Sign In
              </p>
            </Link>
            <Link to="/signup">
              <p className="text-xs sm:text-[16px] bg-red-600 px-3 py-2 rounded-lg cursor-pointer hover:scale-105 duration-100">
                Sign Up
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
