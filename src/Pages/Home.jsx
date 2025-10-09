import React, { useEffect, useState } from "react";
import playImg from "../assets/playstore.png";
import appImg from "../assets/appstore.png";
import banner from "../assets/hero.png";
import TopApps from "../Components/TopApps";
import { Link } from "react-router";
const Home = () => {
  const [pageDelay, setPageDelay] = useState(false);
  useEffect(() => {
    setPageDelay(true);
    setTimeout(() => {
      setPageDelay(false);
    }, 300);
  }, []);
  if (pageDelay)
    return (
      <div className="w-full min-h-[400px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  return (
    <>
      <div className="mb-20">
        <div className="flex flex-col items-center px-5">
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
              <Link to="https://play.google.com/store/games?hl=en&pli=1">
                <button className="text-xl font-semibold flex border p-4 gap-2.5 rounded-sm border-[#D2D2D2] hover:scale-105 shadow-2xl">
                  <img src={playImg} alt="" /> Google Play
                </button>
              </Link>
              <Link to="https://www.apple.com/app-store/">
                <button className="text-xl font-semibold flex border p-4 gap-2.5 rounded-sm border-[#D2D2D2] hover:scale-105 shadow-2xl">
                  <img src={appImg} alt="" /> App Store
                </button>
              </Link>
            </div>
          </div>
          <img src={banner} alt="" />
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5 text-center py-20 text-white">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
            <div className="text-base px-16 text-[#00D390]">
              <h4>Total Downloads</h4>
              <h1 className="font-extrabold md:text-[64px] text-[48px] ">
                29.6M
              </h1>
              <h4>21% more than last month</h4>
            </div>
            <div className="text-base px-16 text-[#FF8811]">
              <h4>Total Reviews</h4>
              <h1 className="font-extrabold md:text-[64px] text-[48px]">
                906K
              </h1>
              <h4>46% more than last month</h4>
            </div>
            <div className="text-base px-16 text-[#001931]">
              <h4>Active Apps</h4>
              <h1 className="font-extrabold md:text-[64px] text-[48px]">
                132+
              </h1>
              <h4>31 more will Launch</h4>
            </div>
          </div>
        </div>
        {/* top apps */}
        <TopApps />
      </div>
    </>
  );
};

export default Home;
