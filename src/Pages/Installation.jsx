import React, { useEffect, useState } from "react";

import SingleInstalledApps from "../Components/SingleInstalledApps";
import useAppData from "../Hooks/useAppData";
import { getInstalledAppsFromLS } from "../Localstorage/InstalledLS";
const Installation = () => {
  const [sort, setSort] = useState("");
  const { apps, error, loading } = useAppData();
  const [installedApps, setInstalledApps] = useState([]);
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    if (!apps.length) return;
    const storedApp = getInstalledAppsFromLS().map((id) =>
      apps.find((item) => item.id === Number(id))
    );

    setInstalledApps(storedApp);
  }, [apps]);

  useEffect(() => {
    if (sort === "High-Low") {
      const sortedApps = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads
      );
      setDelay(true);
      setTimeout(() => {
        setInstalledApps(sortedApps);
        setDelay(false);
      }, 500);
    } else if (sort === "Low-High") {
      const sortedApps = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );
      setDelay(true);
      setTimeout(() => {
        setInstalledApps(sortedApps);
        setDelay(false);
      }, 500);
    }
  }, [sort]);

  return (
    <>
      <div className="text-center my-20 px-5 ">
        <h1 className="font-bold  text-3xl md:text-5xl">Your Installed Apps</h1>
        <p className="md:text-lg  mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex items-center justify-between mb-4 flex-col-reverse gap-5 md:flex-row md:gap-0">
          <h4 className="font-semibold text-lg md:text-2xl">
            ({installedApps.length} apps) Apps Found
          </h4>
          <fieldset className="fieldset">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select w-[200px]"
            >
              <option>Sort By Size</option>
              <option>High-Low</option>
              <option>Low-High</option>
            </select>
          </fieldset>
        </div>
        <div>
          {loading && (
            <div className="w-full min-h-[400px] flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          )}
          {delay ? (
            <div className="w-full min-h-[400px] flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : (
            installedApps.map((app) => (
              <SingleInstalledApps
                key={app.id}
                app={app}
                setInstalledApps={setInstalledApps}
                installedApps={installedApps}
                loading={loading}
                error={error}
              />
            ))
          )}
          {error && <div>{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Installation;
