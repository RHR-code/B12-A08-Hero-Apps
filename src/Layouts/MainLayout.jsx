import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-[#f5f5f5] ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
