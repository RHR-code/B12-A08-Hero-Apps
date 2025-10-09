import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { deleteInstalledAppsFromLS } from "../Localstorage/InstalledLS";
const SingleInstalledApps = ({ app, setInstalledApps, installedApps }) => {
  const { image, title, downloads, ratingAvg, size, id } = app || {};
  const handleUninstall = () => {
    deleteInstalledAppsFromLS(id);
    const appsAfterDel = installedApps.filter((app) => app.id !== id);

    setInstalledApps(appsAfterDel);
  };
  return (
    <div className="bg-white p-4 rounded-sm flex items-center justify-between flex-col md:flex-row  mb-5">
      <div className="flex gap-4 items-center">
        <img className="w-20 rounded-lg" src={image} alt="" />
        <div className="">
          <h2 className="font-medium text-xl text-start pl-4">{title}</h2>
          <div className="flex justify-start items-center  md:gap-5">
            <button className="font-medium text-base flex items-center gap-2  py-1.5 px-2.5 rounded-sm text-[#00D390]">
              <LuDownload /> {downloads}M
            </button>
            <button className="font-medium text-base flex items-center gap-2 text-[#FF8811] py-1.5 px-2.5 rounded-sm ">
              <FaStar /> {ratingAvg}
            </button>
            <button className="text-[#627382]">{size} MB</button>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleUninstall}
          className="bg-[#00D390] font-semibold  md:text-lg py-2 md:py-3.5 px-5 rounded-sm text-white mt-5 md:mt-2"
        >
          {" "}
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default SingleInstalledApps;
