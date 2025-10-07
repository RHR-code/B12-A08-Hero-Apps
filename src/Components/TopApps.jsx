import React from "react";
import SingleApp from "./SingleApp";
import useAppData from "../Hooks/useAppData";
import { NavLink } from "react-router";

const TopApps = () => {
  const { apps, loading, error } = useAppData();
  const topApps = apps.slice(0, 8);

  return (
    <div className="px-5">
      <div className="text-center mt-20">
        <h1 className="font-bold text-5xl">Trending Apps</h1>
        <p className="text-lg mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? <h1>Page is Loading...</h1> : ""}
        {topApps.map((app) => (
          <SingleApp key={app.id} appData={app} />
        ))}
        {error ? (
          <div className="flex justify-center items-center">{error}</div>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-center mt-10 rounded-sm">
        <NavLink
          to="/apps"
          className="px-10 py-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-70 hover:scale-105 text-white font-semibold text-base"
        >
          {" "}
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default TopApps;
