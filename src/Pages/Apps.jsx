import React, { useEffect, useState } from "react";
import useAppData from "../Hooks/useAppData";
import SingleApp from "../Components/SingleApp";
import AppNotFound from "../Components/AppNotFound";

const Apps = () => {
  const { apps, loading, error } = useAppData();
  const [delay, setDelay] = useState(null);
  const [pageDelay, setPageDelay] = useState(false);
  const [search, setSearch] = useState("");
  const searchText = search.trim().toLocaleLowerCase();
  const [searchedApps, setSearchedApps] = useState(apps);

  useEffect(() => {
    setPageDelay(true);
    setTimeout(() => {
      setPageDelay(false);
    }, 300);
    if (!apps.length) return;
    setDelay(true);
    setTimeout(() => {
      let newSearchedApps = apps.filter((app) =>
        app.title.toLowerCase().includes(searchText)
      );
      setSearchedApps(newSearchedApps);
      setDelay(false);
    }, 500);
  }, [apps, searchText]);
  if (pageDelay)
    return (
      <div className="w-full min-h-[400px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  return (
    <>
      <div className="px-5">
        <div className="text-center pt-20 py-10">
          <h1 className="font-bold  text-3xl md:text-5xl">
            Our All Applications
          </h1>
          <p className="md:text-lg  mt-4 mb-10">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        {/* search apps */}
        <div className="flex items-center justify-between mb-4 flex-col-reverse gap-5 md:flex-row md:gap-0">
          <h4 className="font-semibold text-lg md:text-2xl">
            ({searchedApps.length}) Apps Found
          </h4>
          <label className="input">
            <svg
              className="h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {loading ? (
            <div className="col-span-4 min-h-[400px] flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : delay ? (
            <div className="col-span-4 min-h-[400px] flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : searchedApps.length > 0 ? (
            searchedApps.map((app) => <SingleApp key={app.id} appData={app} />)
          ) : (
            <div className="col-span-4 ">
              <AppNotFound setSearch={setSearch} condition="forApp" />
            </div>
          )}
          {error ? (
            <div className="flex justify-center items-center">{error}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Apps;
