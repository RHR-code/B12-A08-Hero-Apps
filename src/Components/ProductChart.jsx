import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ProductChart = ({ ratings, description }) => {
  let des1 = "";
  let des2 = "";
  let des3 = "";
  if (description) {
    des1 = description.split(" ").slice(0, 100).join(" ");
    des2 = description.split(" ").slice(100, 200).join(" ");
    des3 = description.split(" ").slice(200, 300).join(" ");
  }

  return (
    <>
      <div className="px-5 mb-20">
        <div className="font-bold text-2xl  mb-6">Ratings</div>
        <div className="w-full h-[354px] border-b pb-10 border-b-gray-400">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" width={150} height={40} data={ratings}>
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-20">
          <div className="font-bold text-2xl  mb-6">Description</div>
          <p className="mb-10">{des1}</p>
          <p className="mb-10">{des2}</p>
          <p>{des3}</p>
        </div>
      </div>
    </>
  );
};

export default ProductChart;
