import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
const SingleApp = ({ appData }) => {
  const { image, title, ratingAvg, downloads, id } = appData;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/apps/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg p-4 rounded-sm hover:scale-105 transition ease-in-out"
    >
      <img className="rounded-lg h-[316px] object-cover" src={image} alt="" />
      <h3 className="font-medium text-xl my-4">{title}</h3>
      <div className="flex justify-between">
        <button className="font-medium text-base flex items-center gap-2 bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm text-[#00D390]">
          <LuDownload /> {downloads}
        </button>
        <button className="font-medium text-base flex items-center gap-2 text-[#FF8811] py-1.5 px-2.5 rounded-sm bg-[#FFF0E1]">
          <FaStar /> {ratingAvg}
        </button>
      </div>
    </div>
  );
};

export default SingleApp;
