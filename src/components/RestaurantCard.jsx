import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition relative"
    >
        <div className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
            {data.distance} km uzakta
        </div>

      <img className="w-full object-cover max-h-[300px]" src={data.photo} />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-semibold">{data.name}</h3>

          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {data.rating}
          </p>
        </div>

        <p className="text-sm my-3 text-gray-500">
          <span>{data.minPrice} ₺ minumum</span>
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-500" />
            <span>{data.estimatedDelivery} dak.</span>
          </p>

          {data.isDeliveryFree && (
            <p className="flex gap-2 items-center font-bold text-sm">
              <MdDeliveryDining className="text-red-500" />
              <span className="font-bold text-sm text-gray-500">Ücretsiz</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
