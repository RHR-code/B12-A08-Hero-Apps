import React, { useEffect, useState } from "react";
import useAppData from "../Hooks/useAppData";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Like from "../assets/Like.png";
import ProductChart from "../Components/ProductChart";

const AppDetails = () => {
  const { apps, error, loading } = useAppData();
  const { id } = useParams();
  const [app, setApp] = useState({});

  useEffect(() => {
    const singleApp = apps.find((app) => app.id === Number(id));
    setApp(singleApp);
  }, [apps, id]);
  const {
    image,
    title,
    ratingAvg,
    downloads,
    companyName,
    reviews,
    size,
    ratings,
    description,
  } = app || {};
  if (loading) return <div>data is loading...</div>;
  if (error) return <div>{error}</div>;
  let newRatings = ratings?.toReversed();

  return (
    <>
      <div className="flex gap-10 my-20 px-5 flex-col md:flex-row">
        <div>
          <img className="md:h-[350px]" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-[32px]">{title}</h1>
          <p className="text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text pb-8 border-b border-b-gray-400 mb-8">
            <span className="text-[#627382]">Developed by</span>{" "}
            <span className="text-transparent font-bold">{companyName}</span>
          </p>
          <div className="flex md:items-center gap-10 flex-col md:flex-row ">
            <div className="flex flex-col  gap-2 ">
              <p className="text-4xl ">
                <FiDownload stroke="#54CF68" />
              </p>
              <p className="text-[#001931]">Average Ratings</p>
              <h1 className="text-[40px] font-extrabold ">{downloads}</h1>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-4xl text-[#FF8811]">
                <FaStar />
              </p>
              <p className="text-[#001931]">Average Ratings</p>
              <h1 className="text-[40px] font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col items-start gap-2">
              <img className="text-4xl" src={Like} alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <h1 className="text-[40px] font-extrabold">{reviews}</h1>
            </div>
          </div>
          <button className="bg-[#00D390] font-semibold text-lg py-3.5 px-5 rounded-sm text-white mt-5 md:mt-2">
            {" "}
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <div>
        <ProductChart ratings={newRatings} description={description} />
      </div>
    </>
  );
};

export default AppDetails;
