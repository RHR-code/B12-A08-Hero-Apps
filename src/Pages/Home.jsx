import React from "react";
import playImg from "../assets/playstore.png";
import appImg from "../assets/appstore.png";
import banner from "../assets/hero.png";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="max-w-[600px] mx-auto text-center leading-tight font-black text-4xl md:text-7xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text mt-20">
              We Build <span className="text-transparent">Productive</span> Apps
            </h1>
            <p className="max-w-[815px] mx-auto text-center text-[#627382] mt-4 mb-10">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-10 ">
              <button className="text-xl font-semibold flex border p-4 gap-2.5 rounded-sm border-[#D2D2D2]">
                <img src={playImg} alt="" /> Google Play
              </button>
              <button className="text-xl font-semibold flex border p-4 gap-2.5 rounded-sm border-[#D2D2D2]">
                <img src={appImg} alt="" /> App Store
              </button>
            </div>
          </div>
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
