import React from "react";
import { toast } from "react-toastify";

const getInstalledAppsFromLS = () => {
  return JSON.parse(localStorage.getItem("InstalledApps")) || [];
};

const setInstalledAppsToLS = (id) => {
  let apps = getInstalledAppsFromLS();

  if (apps.some((item) => item === id)) {
    toast.error("App Already Installed", {
      autoClose: 1000,
    });
  } else {
    apps.push(id);
    localStorage.setItem("InstalledApps", JSON.stringify(apps));
    toast.success("App Installed", {
      autoClose: 1000,
    });
  }
};

const deleteInstalledAppsFromLS = (id) => {
  let apps = getInstalledAppsFromLS();
  let newApps = apps.filter((app) => Number(app) !== id);
  localStorage.setItem("InstalledApps", JSON.stringify(newApps));
  toast.error("App Uninstalled", {
    autoClose: 1000,
  });
};

export {
  getInstalledAppsFromLS,
  setInstalledAppsToLS,
  deleteInstalledAppsFromLS,
};
