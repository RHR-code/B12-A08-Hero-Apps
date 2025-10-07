import React from "react";
import MainLayout from "../Layouts/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import Home from "../Pages/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index={true} element={<Home />}></Route>
      <Route path="/apps" element={<Apps />} />
      <Route path="/installation" element={<Installation />} />
    </Route>
  )
);

export default MainRoute;
