import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const House = ({ house }) => {
  return (
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      {/* Card Item */}

      {/* Clickable Area */}

      <figure className="md:mx-0">
        {/* Image */}
        <Link
          to={`/house/${house._id}`}
          className="cursor-pointer no-underline"
        >
          <img
            src={house.image}
            className="rounded-t h-72 w-full object-cover"
          />
        </Link>

        <figcaption className="p-4">
          {/* Title */}
          <Link className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300 no-underline">
            {house.name}
          </Link>
          <div>
            <Rating value={house.rating} text={`${house.numReviews} reviews`} />
          </div>

          {/* Description */}
          <small className="leading-5 text-[#cc5500] text-[1.2rem] dark:text-gray-400">
            &#8358;{house.price}
          </small>
        </figcaption>
      </figure>
    </div>
  );
};

export default House;
