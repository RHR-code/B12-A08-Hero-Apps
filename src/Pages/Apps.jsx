import React, { useState } from "react";
import useAppData from "../Hooks/useAppData";
import SingleApp from "../Components/SingleApp";
import AppNotFound from "../Components/AppNotFound";

const Apps = () => {
  const { apps, loading, error } = useAppData();
  const [search, setSearch] = useState("");
  const searchText = search.trim().toLocaleLowerCase();
  const searchedApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className="px-5">
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            <div className="flex justify-center items-center">
              <h1>Page is Loading...</h1>
            </div>
          ) : (
            ""
          )}
          {searchedApps.map((app) => (
            <SingleApp key={app.id} appData={app} />
          ))}
          {searchedApps.length === 0 && !loading ? (
            <div className="col-span-4 ">
              <AppNotFound setSearch={setSearch} />
            </div>
          ) : (
            ""
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
