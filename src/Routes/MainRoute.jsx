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
import AppDetails from "../Pages/AppDetails.jsx";
import AppNotFound from "../Components/AppNotFound.jsx";
import PageNotFound from "../Components/PageNotFound.jsx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route
      errorElement={
        <div>
          <Navbar />
          <PageNotFound />
          <Footer />
        </div>
      }
      path="/"
      element={<MainLayout />}
    >
      <Route index={true} element={<Home />}></Route>
      <Route path="/apps" element={<Apps />} />

      <Route
        path="/apps/:id"
        element={<AppDetails />}
        errorElement={<AppNotFound />}
      />

      <Route path="/installation" element={<Installation />} />
    </Route>
  )
);

export default MainRoute;
