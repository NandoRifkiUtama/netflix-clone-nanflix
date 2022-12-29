import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen text-white">
      <img
        className="w-full h-full object-cover absolute left-0 top-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/26c35d01-db23-4f28-b2eb-42490d7f4002/ID-en-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/70 w-full h-full absolute top-0 left-0">
        <div className="fixed px-4 py-24 w-full z-50">
          <div className="bg-black/60 max-w-[450px] h-[500px] mx-auto flex flex-col items-center py-10 px-4">
            <p className="font-bold text-2xl md:text-3xl mb-5">Sign Up</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[350px] items-center"
              action=""
            >
              <input
                onChange={(event) => setEmail(event.target.value)}
                className="my-2 px-2 py-2 rounded-xl bg-gray-900 text-white w-[80%]"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(event) => setPassword(event.target.value)}
                className="my-2 px-2 py-2 rounded-xl bg-gray-900 text-white w-[80%]"
                type="password"
                placeholder="Password"
              />
              <button className="my-2 py-2 rounded-xl bg-red-600 hover:scale-105 duration-300 w-[80%]">
                Sign Up
              </button>
              <div className="flex justify-between mt-3">
                <p className="mr-6">
                  <input className="mr-2 cursor-pointer" type="checkbox" />
                  Remember me
                </p>
                <p className="cursor-pointer hover:text-red-600">Need help?</p>
              </div>
            </form>
            <p className="text-xs bottom-10 text-gray-600 fixed">
              Powered by Nando, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
