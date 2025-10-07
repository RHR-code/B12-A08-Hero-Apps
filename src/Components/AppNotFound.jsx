import React from "react";
import appErrImg from "../assets/App-Error.png";
const AppNotFound = ({ setSearch }) => {
  return (
    <div className="flex flex-col items-center my-20">
      <img src={appErrImg} alt="" />
      <h1 className="font-semibold text-5xl pt-4">OPPS!! APP NOT FOUND</h1>
      <p className="text-xl pt-4 ">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div className="flex justify-center mt-10 rounded-sm">
        <button
          onClick={() => setSearch("")}
          className="px-10 py-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-70 hover:scale-105 text-white font-semibold text-base"
        >
          {" "}
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
